import { User } from '../models/user.model';
import { Users, userInput } from '../types/user.d';

export class UserService {
  static async getUserById(userId: string): Promise<Users | null> {
    return await User.findById(userId);
  }

  static async getUserByEmail(email: string): Promise<Users | null> {
    return await User.findOne({ email });
  }

  static async updateUser(userId: string, updateData: Partial<userInput>): Promise<Users | null> {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  }

  static async deleteUser(userId: string): Promise<Users | null> {
    return await User.findByIdAndDelete(userId);
  }
}
