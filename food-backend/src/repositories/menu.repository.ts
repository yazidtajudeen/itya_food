import { MenuItem } from '../models/menu.model';
import { MenuItemType, menuInput, menuUpdateInput } from '../types/menu.d';

export class MenuRepository {
  static async createMenuItem(menuData: menuInput): Promise<MenuItemType> {
    const newMenuItem = new MenuItem(menuData);
    await newMenuItem.save();
    return newMenuItem;
  }

  static async getMenuItemById(menuItemId: string): Promise<MenuItemType | null> {
    return await MenuItem.findById(menuItemId);
  }

  static async getMenuItemByIdWithRestaurant(menuItemId: string): Promise<MenuItemType | null> {
    return await MenuItem.findById(menuItemId).populate('restaurantId', 'name _id').exec();
  }

  static async getMenuItemsByRestaurant(restaurantId: string): Promise<MenuItemType[]> {
    return await MenuItem.find({ restaurantId });
  }

  static async updateMenuItem(menuItemId: string, updateData: Partial<menuUpdateInput>): Promise<MenuItemType | null> {
    return await MenuItem.findByIdAndUpdate(menuItemId, updateData, { new: true });
  }

  static async deleteMenuItem(menuItemId: string): Promise<MenuItemType | null> {
    return await MenuItem.findByIdAndDelete(menuItemId);
  }

  static async searchMenuItems(query: string, restaurantId?: string): Promise<MenuItemType[]> {
    const searchRegex = new RegExp(query, 'i');
    const filter: any = {
      $or: [
        { name: searchRegex },
        { description: searchRegex },
      ],
    };

    if (restaurantId) {
      filter.restaurantId = restaurantId;
    }

    return await MenuItem.find(filter);
  }
}
