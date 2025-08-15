import { sign, verify } from 'jsonwebtoken';
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';
import { userInput, userLoginInput } from '../types/user.d';

export class AuthService {
  static async register(userData: userInput) {
    const { username, email, password } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      throw new Error('Username or email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
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

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = sign({ userId: user._id }, process.env.JWT_SECRET || 'supersecretjwtkey', { expiresIn: '1h' });
    return token;
  }

  static async validateToken(token: string) {
    try {
      const decoded = await verify(token, process.env.JWT_SECRET || 'supersecretjwtkey');
      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
