import 'package:flutter/material.dart';
import 'package:flutter_application_1/utils/theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    
    return MaterialApp(
      debugShowCheckedModeBanner: false,
     themeMode: ThemeMode.system,
     theme: AppTheme.lightTheme,
     darkTheme:AppTheme.darkTheme,
      home: Scaffold(
        body: Column(children: [],),
      ),
    );
  }
}


