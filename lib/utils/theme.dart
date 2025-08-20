import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme{
  static ThemeData  lightTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.light,
    scaffoldBackgroundColor: Colors.white,
    textTheme: GoogleFonts.poppinsTextTheme(
      TextTheme(
        bodySmall: GoogleFonts.poppins(fontSize: 12),
        bodyMedium: GoogleFonts.poppins(fontSize: 16),
        bodyLarge: GoogleFonts.poppins(fontSize: 18),
        titleSmall: GoogleFonts.poppins(fontSize: 20),
        titleMedium: GoogleFonts.poppins(fontSize: 24),
      ),
    ).copyWith(
      displayLarge: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      displayMedium: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      displaySmall: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      headlineLarge: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      headlineMedium: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      headlineSmall: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      titleLarge: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      titleMedium: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      titleSmall: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
    ),
  );
  static  ThemeData  darkTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    scaffoldBackgroundColor: Colors.black,
    textTheme: GoogleFonts.poppinsTextTheme(
      TextTheme(
        bodySmall: GoogleFonts.poppins(fontSize: 12),
        bodyMedium: GoogleFonts.poppins(fontSize: 16),
        bodyLarge: GoogleFonts.poppins(fontSize: 18),
        titleSmall: GoogleFonts.poppins(fontSize: 20),
        titleMedium: GoogleFonts.poppins(fontSize: 24),
      ),
    ).copyWith(
      displayLarge: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      displayMedium: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      displaySmall: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      headlineLarge: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      headlineMedium: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      headlineSmall: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      titleLarge: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      titleMedium: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
      titleSmall: GoogleFonts.abhayaLibre(fontSize: 24, fontWeight: FontWeight.normal),
    ),
  );
  
}