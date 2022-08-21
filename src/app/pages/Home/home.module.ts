import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavBarModule } from 'src/app/features/nav-bar/nav-bar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { CardModule } from 'src/app/features/card/card.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    NavBarModule,
    FlexLayoutModule,
    MatCardModule,
    CardModule,
  ]
})
export class HomeModule { }
