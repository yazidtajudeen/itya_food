import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
@RoutePage()
class Checkout extends StatefulWidget {
  const Checkout({super.key});

  @override
  State<Checkout> createState() => _CheckoutState();
}

class _CheckoutState extends State<Checkout> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(body: Column(children: [],),);
  }
}