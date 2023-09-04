import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {NotificationService} from '../../../@business/services/notification.service';
import {NotificationType} from '../../../@business/enum/notificaiton-type.enum';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  uploadedFiles: Array<File>;
  private baseUrl;


  constructor(private router: Router, private http: HttpClient, private notificationService: NotificationService) {
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit(): void {
  }

  proceedBtnClick() {
    // this.router.navigate(['submission']);

    const formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('file', this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post(this.baseUrl + 'api/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
        // @ts-ignore
        this.notificationService(NotificationType.SUCCESS, response);
      });
  }

  fileChange($event) {
    this.uploadedFiles = $event.target.files;
  }
}
