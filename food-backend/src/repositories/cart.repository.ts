import { Carts } from "../types/cart.d";
import { Cart } from "../models/cart.model";
import { cartUpdateInput } from "../types/cart.d";
import { Types } from "mongoose";

export class CartRepository {
  static async createCart(cartData: Carts) {
    const newCart = new Cart(cartData);
    await newCart.save();
    return newCart;
  }

  static async getCartById(cartId: string) {
    return await Cart.findById(cartId);
  }

  static async getCartByUserId(userId: string) {
    return await Cart.findOne({ userId });
  }

  static async addItemToCart(userId: string, menuItemId: string, quantity: number = 1) {
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $push: { items: { menuItemId: new Types.ObjectId(menuItemId), quantity } } },
      { new: true, upsert: true }
    ).exec();
    return cart;
  }

  static async updateItemQuantity(userId: string, menuItemId: string, quantity: number) {
    return Cart.findOneAndUpdate(
      { userId, "items.menuItemId": new Types.ObjectId(menuItemId) },
      { $set: { "items.$.quantity": quantity } },
      { new: true }
    ).exec();
  }

  static async removeItemFromCart(userId: string, menuItemId: string) {
    return Cart.findOneAndUpdate(
      { userId },
      { $pull: { items: { menuItemId: new Types.ObjectId(menuItemId) } } },
      { new: true }
    ).exec();
  }

  static async clearCart(userId: string) {
    return Cart.findOneAndUpdate(
      { userId },
      { $set: { items: [] } },
      { new: true }
    ).exec();
  }

  static async updateCart(cartId: string, updateData: Partial<cartUpdateInput>) {
    return await Cart.findByIdAndUpdate(cartId, updateData, { new: true });
  }

  static async deleteCart(cartId: string) {
    return await Cart.findByIdAndDelete(cartId);
  }
}
