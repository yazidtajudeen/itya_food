import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
@RoutePage()
class Wallet extends StatefulWidget {
  const Wallet({super.key});

  @override
  State<Wallet> createState() => _WalletState();
}

class _WalletState extends State<Wallet> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(body: Column(children: [],),);
  }
}