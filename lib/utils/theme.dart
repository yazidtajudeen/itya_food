import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme{
  static ThemeData  lightTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.light,
    scaffoldBackgroundColor: Colors.white,
    textTheme: GoogleFonts.poppinsTextTheme(
      
      
    ).copyWith(
      headlineSmall: GoogleFonts.abhayaLibre(
        fontSize: 24,
        fontWeight: FontWeight.normal,
        
      ),
    ),
  );
  static  ThemeData  darkTheme = ThemeData(
 brightness: Brightness.dark,
  );
  
}