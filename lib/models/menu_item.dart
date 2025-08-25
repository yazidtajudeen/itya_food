class MenuItem {
  final String id;
  final String name;
  final String? description;
  final double price;
  final String? image;
  final String? category;
  final String restaurantId;

  MenuItem({
    required this.id,
    required this.name,
    this.description,
    required this.price,
    this.image,
    this.category,
    required this.restaurantId,
  });

  factory MenuItem.fromJson(Map<String, dynamic> json) => MenuItem(
        id: json['_id'],
        name: json['name'],
        description: json['description'],
        price: json['price'].toDouble(),
        image: json['image'],
        category: json['category'],
        restaurantId: json['restaurantId'],
      );
}