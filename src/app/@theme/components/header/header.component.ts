import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {CatalogService} from '../../../@core/services/catalog.service';
import {User} from '../../../@core/model/user.model';
import {CurrentUserService} from '../../../@core/services/current-user.service';
import {Router} from '@angular/router';
import {NbUserMenuItem} from '@nebular/theme/components/user/user.component';
import {ShoppingCartService} from '../../../@core/services/shopping-cart.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
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
    this.currentUserService.currentUser$.takeUntil(this.destroy$).subscribe(
      (userData: User) => {
        this.currentUser = userData;
      });
    this.shoppingCartService.currentCartItemsCount$.takeUntil(this.destroy$).subscribe(
      count => { this.cartItems = count; });
  }

  ngOnDestroy() {
    this.destroy$.next();
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
