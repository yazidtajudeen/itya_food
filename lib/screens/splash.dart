import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
@RoutePage()
 class Splash extends StatefulWidget {
   const Splash({super.key});
 
   @override
   State<Splash> createState() => _SplashState();
 }
 
 class _SplashState extends State<Splash> {
   @override
   Widget build(BuildContext context) {
     return Scaffold(
      backgroundColor: Colors.white,
      body: Column(
        children: [],
      ),
     );
   }
 }