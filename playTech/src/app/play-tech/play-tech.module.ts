import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayTechRoutingModule } from './play-tech-routing.module';
import { PlayTechComponent } from './play-tech.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [PlayTechComponent,],
  imports: [
    CommonModule,
    PlayTechRoutingModule,
    LayoutModule
  ]
})
export class PlayTechModule { }
