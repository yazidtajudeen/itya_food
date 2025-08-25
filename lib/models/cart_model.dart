import 'menu_item.dart';
class Cart {
  final String id;
  final String userId;
  final List<CartItem> items;

  Cart({
    required this.id,
    required this.userId,
    required this.items,
  });

  factory Cart.fromJson(Map<String, dynamic> json) => Cart(
        id: json['_id'],
        userId: json['userId'],
        items: (json['items'] as List)
            .map((item) => CartItem.fromJson(item))
            .toList(),
      );
}

class CartItem {
  final MenuItem menuItemId;
  final int quantity;

  CartItem({
    required this.menuItemId,
    required this.quantity,
  });

  factory CartItem.fromJson(Map<String, dynamic> json) => CartItem(
        menuItemId: MenuItem.fromJson(json['menuItemId']),
        quantity: json['quantity'],
      );
}