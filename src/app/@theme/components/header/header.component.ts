import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {CatalogService} from '../../../@core/data/services/catalog.service';
import {User} from '../../../@core/data/model/user.model';
import {CurrentUserService} from '../../../@core/data/services/current-user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NbUserMenuItem} from '@nebular/theme/components/user/user.component';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  currentUser: User;
  picture = 'assets/images/user.png';

  items: NbUserMenuItem[]  = [
    { title: 'Account', link: 'account'},
    { title: 'Logout', link: 'account/logout'}];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private catalogService: CatalogService,
              private currentUserService: CurrentUserService,
              private router: Router,
              private analyticsService: AnalyticsService, private themeService: NbThemeService) {
  }

  ngOnInit() {
    this.themeService.changeTheme('default');
    this.currentUserService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
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
    console.log('searching books for keywords: ' + keywords);
    // check if current route is search or not
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
    this.catalogService.searchBooks(keywords);
  }
}
