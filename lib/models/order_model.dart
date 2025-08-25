import 'menu_item.dart';
class Order {
  final String id;
  final String userId;
  final String restaurantId;
  final List<OrderItem> items;
  final double totalPrice;
  final String status;
  final String paymentStatus;

  Order({
    required this.id,
    required this.userId,
    required this.restaurantId,
    required this.items,
    required this.totalPrice,
    required this.status,
    required this.paymentStatus,
  });

  factory Order.fromJson(Map<String, dynamic> json) => Order(
        id: json['_id'],
        userId: json['userId'],
        restaurantId: json['restaurantId'],
        items: (json['items'] as List)
            .map((item) => OrderItem.fromJson(item))
            .toList(),
        totalPrice: json['totalPrice'].toDouble(),
        status: json['status'],
        paymentStatus: json['paymentStatus'],
      );
}

class OrderItem {
  final MenuItem menuItemId;
  final int quantity;

  OrderItem({
    required this.menuItemId,
    required this.quantity,
  });

  factory OrderItem.fromJson(Map<String, dynamic> json) => OrderItem(
        menuItemId: MenuItem.fromJson(json['menuItemId']),
        quantity: json['quantity'],
      );
}