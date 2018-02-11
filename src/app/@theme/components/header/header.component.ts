import { Component, Input, OnInit } from '@angular/core';

import {NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {CatalogService} from '../../../@core/data/services/catalog.service';
import {User} from '../../../@core/data/model/user.model';
import {CurrentUserService} from '../../../@core/data/services/current-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  currentUser: User;

  // TODO onclick-events not working
  userMenu = [
    { title: 'Account', onclick: this.router.navigate(['account'])},
    { title: 'Log out', onclick: this.logout()}];

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
    this.menuService.navigateHome();
  }

  navigateToShoppingCart() {
    this.router.navigate(['/pages/shopping-cart']);
  }

  logout() {
    this.currentUserService.purgeAuth();
  }

  startSearch(keywords) {
    console.log('searching books for keywords: ' + keywords);
    this.catalogService.searchBooks(keywords);
  }
}
