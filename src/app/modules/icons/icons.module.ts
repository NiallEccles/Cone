import { NgModule } from '@angular/core';
import { 
  IconCamera, 
  IconHeart, 
  IconGithub 
} from 'angular-feather';

const icons = [
  IconCamera,
  IconHeart,
  IconGithub
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
