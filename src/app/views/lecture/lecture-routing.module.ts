import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from '../student/student.component';
import {StudentDashboardComponent} from '../student/student-dashboard/student-dashboard.component';
import {StudentDownloadComponent} from '../student/student-download/student-download.component';
import {StudentReportingComponent} from '../student/student-reporting/student-reporting.component';
import {StudentSubmissionComponent} from '../student/student-submission/student-submission.component';
import {LectureComponent} from './lecture.component';
import {LectureDashboardComponent} from './lecture-dashboard/lecture-dashboard.component';
import {LectureSummaryComponent} from './lecture-summary/lecture-summary.component';
import {LectureSummaryPageComponent} from './lecture-summary-page/lecture-summary-page.component';


const routes: Routes = [
  {
    path: '',
    // component: LectureComponent,
    data: {
      title: 'Chair'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: LectureDashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'summary',
        component: LectureSummaryComponent,
        data: {
          title: 'Summary'
        }
      },
      {
        path: 'summarization',
        component: LectureSummaryPageComponent,
        data: {
          title: 'Summarization'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LectureRoutingModule { }
