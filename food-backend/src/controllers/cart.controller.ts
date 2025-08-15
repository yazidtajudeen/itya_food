import { Request, Response } from 'express';
import { CartRepository } from '../repositories/cart.repository';

export const getCartByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const cart = await CartRepository.getCartByUserId(userId);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const addItemToCart = async (req: Request, res: Response) => {
  try {
    const { userId, menuItemId, quantity } = req.body;
    const cart = await CartRepository.addItemToCart(userId, menuItemId, quantity);
    res.status(200).json(cart);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateItemQuantity = async (req: Request, res: Response) => {
  try {
    const { userId, menuItemId, quantity } = req.body;
    const cart = await CartRepository.updateItemQuantity(userId, menuItemId, quantity);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found or item not in cart' });
    }
    res.status(200).json(cart);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const removeItemFromCart = async (req: Request, res: Response) => {
  try {
    const { userId, menuItemId } = req.body;
    const cart = await CartRepository.removeItemFromCart(userId, menuItemId);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found or item not in cart' });
    }
    res.status(200).json(cart);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const clearCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const cart = await CartRepository.clearCart(userId);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}; 