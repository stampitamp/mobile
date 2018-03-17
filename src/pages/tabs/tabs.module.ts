import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { TabHiddenDirective } from './tabs.directive'

@NgModule({
  declarations: [
    TabsPage,
    TabHiddenDirective,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
})
export class TabsPageModule {}
