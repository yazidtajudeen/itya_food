import { sign, verify } from 'jsonwebtoken';
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';
import { userInput, userLoginInput, Users } from '../types/user.d';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export class AuthService {
  static async register(userData: userInput) {
    const { username, email, password } = userData;

  
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      throw new Error('Username or email already exists');
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return newUser;
  }

  static async login(userData: userLoginInput) {
    const { email, password } = userData;

   
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

   
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

  
    const token = sign({ userId: user._id }, process.env.JWT_SECRET || 'supersecretjwtkey', { expiresIn: '1h' });
    return token;
  }

  static async validateToken(token: string) {
    try {
      const decoded = verify(token, process.env.JWT_SECRET || 'supersecretjwtkey');
      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  static async generateResetToken(email: string): Promise<string> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour
    await user.save();

    // Send email with reset token
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL_USER,
      subject: 'Password Reset Token',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
            `Please use the following token to reset your password: ${resetToken}\n\n` +
            `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    await transporter.sendMail(mailOptions);
    return resetToken;
  }

  static async verifyResetToken(token: string): Promise<Users> {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      throw new Error('Password reset token is invalid or has expired');
    }
    return user;
  }

  static async resetPassword(token: string, newPassword: string): Promise<Users> {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      throw new Error('Password reset token is invalid or has expired');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();
    return user;
  }
}
