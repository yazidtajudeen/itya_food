import 'package:auto_route/auto_route.dart';
import 'app_router.gr.dart';

@AutoRouterConfig(replaceInRouteName: 'Page,Route')
class AppRouter extends RootStackRouter {
  @override
  List<AutoRoute> get routes => [
    AutoRoute(page: Splash.page, initial: true),
    AutoRoute(page: AddressManagement.page),
    AutoRoute(page: PrivacyPermissions.page), 
    AutoRoute(page: HelpFaq.page),
    AutoRoute(page: NotificationRoute.page),
    AutoRoute(page: Profile.page),
    AutoRoute(page: OrderTracking.page),
    AutoRoute(page: Checkout.page),
    AutoRoute(page: Cart.page),
    AutoRoute(page: OrderStatus.page),
    AutoRoute(page: Wallet.page),
    AutoRoute(page: Settings.page),
    AutoRoute(page: Likes.page),
    AutoRoute(page: ViewRestaurant.page),
    AutoRoute(page: ViewFoodDetail.page),
    AutoRoute(page: LocateRestaurant.page),
    AutoRoute(page: Search.page),
    AutoRoute(page: Home.page),
    AutoRoute(page: SuccessfullyReset.page), 
    AutoRoute(page: VerificationCode.page),
    AutoRoute(page: SetNewPassword.page),
    AutoRoute(page: ForgotPassword.page),
    AutoRoute(page: Signup.page),
    AutoRoute(page: Login.page),
    AutoRoute(page: SignupOption.page),
    AutoRoute(page: Onboarding.page),
    AutoRoute(page: AcceptLocation.page),
  ];
}