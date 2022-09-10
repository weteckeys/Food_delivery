import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'mobile-verify',
    loadChildren: () => import('./pages/mobile-verify/mobile-verify.module').then(m => m.MobileVerifyPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'user-location',
    loadChildren: () => import('./pages/user-location/user-location.module').then(m => m.UserLocationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./pages/favourite/favourite.module').then(m => m.FavouritePageModule)
  },
  {
    path: 'discovery',
    loadChildren: () => import('./pages/discovery/discovery.module').then(m => m.DiscoveryPageModule)
  },
  {
    path: 'collections',
    loadChildren: () => import('./pages/collections/collections.module').then(m => m.CollectionsPageModule)
  },
  {
    path: 'rest-detail',
    loadChildren: () => import('./pages/rest-detail/rest-detail.module').then(m => m.RestDetailPageModule)
  },
  {
    path: 'nearby',
    loadChildren: () => import('./pages/nearby/nearby.module').then(m => m.NearbyPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./pages/restaurants/restaurants.module').then(m => m.RestaurantsPageModule)
  },
  {
    path: 'trending',
    loadChildren: () => import('./pages/trending/trending.module').then(m => m.TrendingPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./pages/friends/friends.module').then(m => m.FriendsPageModule)
  },
  {
    path: 'all-photos',
    loadChildren: () => import('./pages/all-photos/all-photos.module').then(m => m.AllPhotosPageModule)
  },
  {
    path: 'all-reviews',
    loadChildren: () => import('./pages/all-reviews/all-reviews.module').then(m => m.AllReviewsPageModule)
  },
  {
    path: 'review-detail',
    loadChildren: () => import('./pages/review-detail/review-detail.module').then(m => m.ReviewDetailPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then(m => m.FilterPageModule)
  },
  {
    path: 'all-photo-list',
    loadChildren: () => import('./pages/all-photo-list/all-photo-list.module').then(m => m.AllPhotoListPageModule)
  },
  {
    path: 'single-photo',
    loadChildren: () => import('./pages/single-photo/single-photo.module').then(m => m.SinglePhotoPageModule)
  },
  {
    path: 'add-comment',
    loadChildren: () => import('./pages/add-comment/add-comment.module').then(m => m.AddCommentPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then(m => m.SuccessPageModule)
  },
  {
    path: 'all-restaurants',
    loadChildren: () => import('./pages/all-restaurants/all-restaurants.module').then(m => m.AllRestaurantsPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./pages/payment-method/payment-method.module').then(m => m.PaymentMethodPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module').then(m => m.AddCardPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then(m => m.AddAddressPageModule)
  },
  {
    path: 'addresses',
    loadChildren: () => import('./pages/addresses/addresses.module').then(m => m.AddressesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
