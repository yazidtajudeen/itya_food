import { Order } from '../models/order.model';
import { Orders, orderInput, orderUpdateInput } from '../types/order.d';

export class OrderService {
  static async createOrder(orderData: orderInput): Promise<Orders> {
    const newOrder = new Order(orderData);
    await newOrder.save();
    return newOrder;
  }

  static async getOrderById(orderId: string): Promise<Orders | null> {
    return await Order.findById(orderId);
  }

  static async getOrdersByUserId(userId: string): Promise<Orders[]> {
    return await Order.find({ userId });
  }

  static async updateOrder(orderId: string, updateData: Partial<orderUpdateInput>): Promise<Orders | null> {
    return await Order.findByIdAndUpdate(orderId, updateData, { new: true });
  }

  static async deleteOrder(orderId: string): Promise<Orders | null> {
    return await Order.findByIdAndDelete(orderId);
  }
}
