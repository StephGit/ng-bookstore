import { Component, Input, OnInit } from '@angular/core';

import {NbThemeService} from '@nebular/theme';
import {CatalogService} from '../../../@core/services/catalog.service';
import {User} from '../../../@core/model/user.model';
import {CurrentUserService} from '../../../@core/services/current-user.service';
import {Router} from '@angular/router';
import {NbUserMenuItem} from '@nebular/theme/components/user/user.component';
import {ShoppingCartService} from '../../../@core/services/shopping-cart.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  cartItems: number;
  currentUser: User;
  picture = 'assets/images/user.png';

  items: NbUserMenuItem[]  = [
    { title: 'Account', link: '/account/overview'},
    { title: 'Logout', link: '/account/logout'}];

  constructor(private catalogService: CatalogService,
              private currentUserService: CurrentUserService,
              private router: Router,
              private shoppingCartService: ShoppingCartService,
              private themeService: NbThemeService) {
  }

  ngOnInit() {
    this.themeService.changeTheme('default');
    this.currentUserService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      });
    this.shoppingCartService.currentCartItemsCount.subscribe(
      count => { this.cartItems = count; });
  }

  goToHome() {
    this.router.navigate(['']);
  }

  navigateToShoppingCart() {
    this.router.navigate(['/shopping-cart']);
  }

  navigateToLogin() {
    this.router.navigate(['/account/login']);
  }

  startSearch(keywords) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
    this.catalogService.searchBooks(keywords);
  }
}
