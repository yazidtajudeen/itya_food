import { Request, Response } from 'express';
import { MenuRepository } from '../repositories/menu.repository';

export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const menuItem = await MenuRepository.createMenuItem(req.body);
    res.status(201).json(menuItem);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getMenuItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const menuItem = await MenuRepository.getMenuItemByIdWithRestaurant(id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.status(200).json(menuItem);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getMenuItemsByRestaurant = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;
    const menuItems = await MenuRepository.getMenuItemsByRestaurant(restaurantId);
    res.status(200).json(menuItems);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedMenuItem = await MenuRepository.updateMenuItem(id, req.body);
    if (!updatedMenuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.status(200).json(updatedMenuItem);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedMenuItem = await MenuRepository.deleteMenuItem(id);
    if (!deletedMenuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const searchMenuItems = async (req: Request, res: Response) => {
  try {
    const { query, restaurantId } = req.query;
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ message: 'Search query is required and must be a string' });
    }
    const menuItems = await MenuRepository.searchMenuItems(query, restaurantId as string);
    res.status(200).json(menuItems);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
