import 'menu_item.dart';
class Like {
  final String id;
  final String userId;
  final MenuItem menuItemId;

  Like({
    required this.id,
    required this.userId,
    required this.menuItemId,
  });

  factory Like.fromJson(Map<String, dynamic> json) => Like(
        id: json['_id'],
        userId: json['userId'],
        menuItemId: MenuItem.fromJson(json['menuItemId']),
      );
}