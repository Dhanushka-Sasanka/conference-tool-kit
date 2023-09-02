import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LectureRoutingModule } from './lecture-routing.module';
import { LectureComponent } from './lecture.component';
import { LectureDashboardComponent } from './lecture-dashboard/lecture-dashboard.component';
import { LectureSummaryComponent } from './lecture-summary/lecture-summary.component';
import { LectureSummaryPageComponent } from './lecture-summary-page/lecture-summary-page.component';


@NgModule({
  declarations: [LectureComponent, LectureDashboardComponent, LectureSummaryComponent, LectureSummaryPageComponent],
  imports: [
    CommonModule,
    LectureRoutingModule
  ]
})
export class LectureModule { }
