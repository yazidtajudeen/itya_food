class User {
  final String id;
  final String username;
  final String email;
  final String? phone;
  

  User({
    required this.id,
    required this.username,
    required this.email,
    this.phone,
    
  });

  factory User.fromJson(Map<String, dynamic> json) => User(
        id: json['_id'],
        username: json['username'],
        email: json['email'],
        phone: json['phone'],
       
      );
}