import { Deliveries, deliveryUpdateInput } from "../types/delivery.d";
import { Delivery } from "../models/delivery.model";

export class DeliveryRepository {
  static async createDelivery(deliveryData: Deliveries) {
    const newDelivery = new Delivery(deliveryData);
    await newDelivery.save();
    return newDelivery;
  }

  static async getDeliveryById(deliveryId: string) {
    return await Delivery.findById(deliveryId);
  }

  static async getDeliveriesByUserId(userId: string) {
    return await Delivery.find({ userId });
  }

  static async updateDelivery(deliveryId: string, updateData: Partial<deliveryUpdateInput>) {
    return await Delivery.findByIdAndUpdate(deliveryId, updateData, { new: true });
  }

  static async deleteDelivery(deliveryId: string) {
    return await Delivery.findByIdAndDelete(deliveryId);
  }
}
 