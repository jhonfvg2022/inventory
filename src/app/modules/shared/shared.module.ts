import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';




@NgModule({
  declarations: [
    MenubarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,    
  ],
  exports: [
    MenubarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
