import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student.component';
import {StudentDashboardComponent} from './student-dashboard/student-dashboard.component';
import {StudentDownloadComponent} from './student-download/student-download.component';
import {StudentReportingComponent} from './student-reporting/student-reporting.component';
import {StudentSubmissionComponent} from './student-submission/student-submission.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Student'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: StudentDashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'download',
        component: StudentDownloadComponent,
        data: {
          title: 'Download'
        }
      },
      {
        path: 'reporting',
        component: StudentReportingComponent,
        data: {
          title: 'Reporting'
        }
      },
      {
        path: 'submission',
        component: StudentSubmissionComponent,
        data: {
          title: 'Submission'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
