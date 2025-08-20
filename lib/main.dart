import 'package:flutter/material.dart';
import 'package:flutter_application_1/screens/splash.dart';
import 'package:flutter_application_1/screens/address_management.dart';
import 'package:flutter_application_1/screens/privacy_permisssions.dart';
import 'package:flutter_application_1/screens/help_faq.dart';
import 'package:flutter_application_1/screens/notification.dart';
import 'package:flutter_application_1/screens/profile.dart';
import 'package:flutter_application_1/screens/order_tracking.dart';
import 'package:flutter_application_1/screens/checkout.dart';
import 'package:flutter_application_1/screens/cart.dart';
import 'package:flutter_application_1/screens/order_status.dart';
import 'package:flutter_application_1/screens/wallet.dart';
import 'package:flutter_application_1/screens/settings.dart';
import 'package:flutter_application_1/screens/likes.dart';
import 'package:flutter_application_1/screens/view_restaurant.dart';
import 'package:flutter_application_1/screens/view_food_detail.dart';
import 'package:flutter_application_1/screens/locate_restaurant.dart';
import 'package:flutter_application_1/screens/search.dart';
import 'package:flutter_application_1/screens/home.dart';
import 'package:flutter_application_1/screens/sucessfully_reset.dart';
import 'package:flutter_application_1/screens/verification_code.dart';
import 'package:flutter_application_1/screens/set_new_password.dart';
import 'package:flutter_application_1/screens/forgot_password.dart';
import 'package:flutter_application_1/screens/signup.dart';
import 'package:flutter_application_1/screens/login.dart';
import 'package:flutter_application_1/screens/signup_option.dart';
import 'package:flutter_application_1/screens/onboarding.dart';
import 'package:flutter_application_1/screens/accept_location.dart';
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
      routes: {
        '/' : (context) => const Splash(),
        '/address_management': (context) => const AddressManagement(),
        '/privacy_permissions': (context) => const PrivacyPermisssions(),
        '/help_faq': (context) => const HelpFaq(),
        '/notification': (context) => const NotificationScreen(),
        '/profile': (context) => const Profile(),
        '/order_tracking': (context) => const OrderTracking(),
        '/checkout': (context) => const Checkout(),
        '/cart': (context) => const Cart(),
        '/order_status': (context) => const OrderStatus(),
        '/wallet': (context) => const Wallet(),
        '/settings': (context) => const Settings(),
        '/likes': (context) => const Likes(),
        '/view_restaurant': (context) => const ViewRestaurant(),
        '/view_food_detail': (context) => const ViewFoodDetail(),
        '/locate_restaurant': (context) => const LocateRestaurant(),
        '/search': (context) => const Search(),
        '/home': (context) => const Home(),
        '/successfully_reset': (context) => const SucessfullyReset(),
        '/verification_code': (context) => const VerificationCode(),
        '/set_new_password': (context) => const SetNewPassword(),
        '/forgot_password': (context) => const ForgotPassword(),
        '/signup': (context) => const Signup(),
        '/login': (context) => const Login(),
        '/signup_option': (context) => const SignupOption(),
        '/onboarding': (context) => const Onboarding(),
        '/accept_location': (context) => const AcceptLocation(),
      },
    );
    
  }
}


