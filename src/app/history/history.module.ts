import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HistoryComponent } from './history.component';
import { HistoryDetailComponent } from './history-detail.component';
import { HistoryRoutingModule } from './history-routing.module';
import { HeaderComponent } from './header/header.component'


@NgModule({
  declarations: [ HistoryComponent, HistoryDetailComponent, HeaderComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HistoryRoutingModule
  ],
  exports: [
    HistoryComponent
  ]
})
export class HistoryModule { }
