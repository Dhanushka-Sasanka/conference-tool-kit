import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StudentComponent} from './student.component';
import {StudentDashboardComponent} from './student-dashboard/student-dashboard.component';
import {StudentDownloadComponent} from './student-download/student-download.component';
import {StudentReportingComponent} from './student-reporting/student-reporting.component';
import {StudentSubmissionComponent} from './student-submission/student-submission.component';
import {StudentSettingComponent} from './student-setting/student-setting.component';
import {NgCircleProgressModule} from 'ng-circle-progress';


@NgModule({
  declarations: [StudentComponent, StudentDashboardComponent, StudentDownloadComponent, StudentReportingComponent, StudentSettingComponent, StudentSubmissionComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      'backgroundGradient': true,
      'backgroundColor': '#998080',
      'backgroundGradientStopColor': '#d1d1d1',
      'backgroundOpacity': 0.5,
      'backgroundStrokeWidth': 0,
      'backgroundPadding': 0,
      'radius': 92,
      'space': 2,
      'toFixed': 0,
      'unitsFontSize': '17',
      'outerStrokeGradient': true,
      'outerStrokeWidth': 35,
      'outerStrokeGradientStopColor': '#dea712',
      'innerStrokeColor': '#82cd0a',
      'innerStrokeWidth': 2,
      'subtitleFontSize': '16',
      'responsive': true
    })
  ]
})
export class StudentModule {
}
