import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PageComponent } from './page/page.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,  
    ReactiveFormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    NzFormModule,
    NzMenuModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,  
    NzAvatarModule,  
    NzSpaceModule,
    NzMessageModule
  ]
})
export class AuthModule { }
