import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageComponent } from './page/page.component';

import { NzImageModule } from 'ng-zorro-antd/image';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    NzImageModule,
    NzStatisticModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class HomeModule { }
