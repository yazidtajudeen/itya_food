import { Request, Response } from 'express';
import { DeliveryRepository } from '../repositories/delivery.repository';

export const createDelivery = async (req: Request, res: Response) => {
  try {
    const delivery = await DeliveryRepository.createDelivery(req.body);
    res.status(201).json(delivery);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getDeliveryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const delivery = await DeliveryRepository.getDeliveryById(id);
    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    res.status(200).json(delivery);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getDeliveriesByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const deliveries = await DeliveryRepository.getDeliveriesByUserId(userId);
    res.status(200).json(deliveries);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDelivery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedDelivery = await DeliveryRepository.updateDelivery(id, req.body);
    if (!updatedDelivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    res.status(200).json(updatedDelivery);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDelivery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedDelivery = await DeliveryRepository.deleteDelivery(id);
    if (!deletedDelivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    res.status(200).json({ message: 'Delivery deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
