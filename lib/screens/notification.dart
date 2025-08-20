import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
@RoutePage()    
class NotificationRoute extends StatefulWidget {
  const NotificationRoute({super.key});

  @override
  State<NotificationRoute> createState() => _NotificationRouteState();
}

class _NotificationRouteState extends State<NotificationRoute> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(body: Column(children: [],),);
  }
} 