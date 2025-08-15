import { Cart } from '../models/cart.model';
import { Carts, cartInput, cartUpdateInput } from '../types/cart.d';

export class CartService {
  static async createCart(cartData: cartInput): Promise<Carts> {
    const newCart = new Cart(cartData);
    await newCart.save();
    return newCart;
  }

  static async getCartById(cartId: string): Promise<Carts | null> {
    return await Cart.findById(cartId);
  }

  static async getCartByUserId(userId: string): Promise<Carts | null> {
    return await Cart.findOne({ userId });
  }

  static async updateCart(cartId: string, updateData: Partial<cartUpdateInput>): Promise<Carts | null> {
    return await Cart.findByIdAndUpdate(cartId, updateData, { new: true });
  }

  static async deleteCart(cartId: string): Promise<Carts | null> {
    return await Cart.findByIdAndDelete(cartId);
  }
}
