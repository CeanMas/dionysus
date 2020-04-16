import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeiPageRoutingModule } from './lei-routing.module';

import { LeiPage } from './lei.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeiPageRoutingModule
  ],
  declarations: [LeiPage]
})
export class LeiPageModule {}
