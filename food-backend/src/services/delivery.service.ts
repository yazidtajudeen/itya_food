import { Delivery } from '../models/delivery.model';
import { Deliveries, deliveryInput, deliveryUpdateInput } from '../types/delivery.d';

export class DeliveryService {
  static async createDelivery(deliveryData: deliveryInput): Promise<Deliveries> {
    const newDelivery = new Delivery(deliveryData);
    await newDelivery.save();
    return newDelivery;
  }

  static async getDeliveryById(deliveryId: string): Promise<Deliveries | null> {
    return await Delivery.findById(deliveryId);
  }

  static async getDeliveriesByUserId(userId: string): Promise<Deliveries[]> {
    return await Delivery.find({ userId });
  }

  static async updateDelivery(deliveryId: string, updateData: Partial<deliveryUpdateInput>): Promise<Deliveries | null> {
    return await Delivery.findByIdAndUpdate(deliveryId, updateData, { new: true });
  }

  static async deleteDelivery(deliveryId: string): Promise<Deliveries | null> {
    return await Delivery.findByIdAndDelete(deliveryId);
  }
}
