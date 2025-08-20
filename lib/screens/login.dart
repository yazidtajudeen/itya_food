import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
@RoutePage()
class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(body: Column(children: [],),);
  }
}