class Restaurant {
  final String id;
  final String name;
  final String location;
  final String description;

  Restaurant({
    required this.id,
    required this.name,
    required this.location,
    required this.description,
  });

  factory Restaurant.fromJson(Map<String, dynamic> json) => Restaurant(
        id: json['_id'],
        name: json['name'],
        location: json['location'],
        description: json['description'],
      );
}