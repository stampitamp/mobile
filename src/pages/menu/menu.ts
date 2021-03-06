import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, App } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { Angular2TokenService } from 'angular2-token';

export interface PageInterface {
	id: number;
	title: string;
	pageName: string;
	tabComponent?: any;
	index?: number;
	icon: string;
}

@IonicPage()
@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html',
})
export class MenuPage {
	// Basic root for our content view
	rootPage: string = 'TabsPage';

	// Reference to the app's root nav
	@ViewChild(Nav) nav: Nav;

	pages: PageInterface[] = [
		{ id: 1, title: 'Bonuskarten', pageName: 'TabsPage', tabComponent: 'CardsPage', index: 0, icon: 'albums' },
		{ id: 2, title: 'QR-Code', pageName: 'TabsPage', tabComponent: 'CodePage', index: 1, icon: 'finger-print' },
		{ id: 3, title: 'Stempel verwalten', pageName: 'TabsPage', tabComponent: 'NewStampingPage', index: 2, icon: 'hammer' },
	];

	constructor(public navCtrl: NavController,
		private tokenService: Angular2TokenService,
		public app: App,
		public user: User) {
	}

	openPage(page: PageInterface) {
		let params = {};

		// The index is equal to the order of our tabs inside tabs.ts
		if (page.index) {
			params = { tabIndex: page.index };
		}

		// The active child nav is our Tabs Navigation
		if (this.nav.getActiveChildNav() && page.index != undefined) {
			this.nav.getActiveChildNav().select(page.index);
		} else {
			// Tabs are not active, so reset the root page
			// In this case: moving to or from SpecialPage
			this.nav.setRoot(page.pageName, params);
		}
	}

	isActive(page: PageInterface) {
		// Again the Tabs Navigation
		let childNav = this.nav.getActiveChildNav();

		if (childNav) {
			if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
				return 'primary';
			}
			return;
		}

		// Fallback needed when there is no active childnav (tabs not active)
		if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
			return 'primary';
		}
		return;
	}

	menuItemPermitted(page: PageInterface): boolean {
		return page.id != 3 || this.user.data.is_vendor;
	}

	doLogout() {
		this.tokenService.signOut();
		this.user.remove();
		this.app.getRootNav().setRoot('LoginPage');
	}

}
