import { NgModule } from '@angular/core';
import { 
  IconMenu
} from 'angular-feather';

const icons = [
  IconMenu,
];

@NgModule({
  declarations: [],
  imports: [
    icons
  ],
  exports: [
    icons
  ]
})
export class IconsModule { }
