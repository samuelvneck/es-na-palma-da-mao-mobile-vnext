import { NgModule } from '@angular/core';
import { DateFormatPipeModule } from '@espm/shared/pipes';
import { IonicPageModule } from 'ionic-angular';

import { ConcursoPage } from './concurso';

@NgModule({
  declarations: [ConcursoPage],
  imports: [DateFormatPipeModule, IonicPageModule.forChild(ConcursoPage)]
})
export class ConcursosPageModule {}
