import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StudentComponent} from './student.component';
import {StudentDashboardComponent} from './student-dashboard/student-dashboard.component';
import {StudentDownloadComponent} from './student-download/student-download.component';
import {StudentReportingComponent} from './student-reporting/student-reporting.component';
import {StudentSubmissionComponent} from './student-submission/student-submission.component';
import {StudentSettingComponent} from './student-setting/student-setting.component';


@NgModule({
  declarations: [StudentComponent, StudentDashboardComponent, StudentDownloadComponent, StudentReportingComponent, StudentSettingComponent, StudentSubmissionComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule {
}
