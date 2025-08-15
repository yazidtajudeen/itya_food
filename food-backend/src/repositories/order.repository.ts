import { Orders, orderUpdateInput } from "../types/order.d";
import { Order } from "../models/order.model";

export class OrderRepository {
  static async createOrder(orderData: Orders) {
    const newOrder = new Order(orderData);
    await newOrder.save();
    return newOrder;
  }

  static async getOrderById(orderId: string) {
    return await Order.findById(orderId);
  }

  static async getOrdersByUserId(userId: string) {
    return await Order.find({ userId });
  }

  static async updateOrder(orderId: string, updateData: Partial<orderUpdateInput>) {
    return await Order.findByIdAndUpdate(orderId, updateData, { new: true });
  }

  static async deleteOrder(orderId: string) {
    return await Order.findByIdAndDelete(orderId);
  }
}
