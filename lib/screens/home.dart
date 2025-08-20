import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
@RoutePage()    
class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(body: Column(children: [],),);
  }
}