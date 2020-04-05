import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParallaxCollapseComponent } from './parallax-collapse.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ParallaxCollapseComponent }])
  ],
  exports: [ParallaxCollapseComponent],
  declarations: [ParallaxCollapseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParallaxCollapseComponentModule {}