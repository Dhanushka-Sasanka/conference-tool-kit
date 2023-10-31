import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {NotificationService} from '../../../@business/services/notification.service';
import {NotificationType} from '../../../@business/enum/notificaiton-type.enum';
import {PaperCheckService} from '../../../@business/services/paperCheck.service';
import {SharedDataService} from '../../../@business/services/sharedServices';
import {AuthenticationService} from '../../../auth/authentication.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  uploadedFile: File;
  formData = new FormData();
  private baseUrl;

  constructor(private router: Router,
              private http: HttpClient,
              private notificationService: NotificationService,
              private paperCheckService: PaperCheckService,
              private sharedService: SharedDataService) {
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit(): void {
  }

  proceedBtnClick() {
    this.formData.append('file', this.uploadedFile);
    // this.sharedService.setFileData(this.uploadedFile);
    this.http.post(this.baseUrl + 'upload', this.formData)
      .subscribe((response) => {
        console.log('response received is ', response);
        setTimeout(() => {
          // @ts-ignore
          this.notificationService.notify(NotificationType.SUCCESS, response['message']);
        }, 5000);
        this.paperMatchingApi();
        this.layoutMatchingApi();
        this.referenceMatchingApi();
      });
  }

  fileChange($event) {
    this.uploadedFile = $event.target.files[0];
  }

  paperMatchingApi() {
    this.paperCheckService.paperCheck(this.formData)
      .subscribe((response) => {
        console.log('response received is ', response['type']);
        this.sharedService.setData(true);
        this.sharedService.setPaperType(response['type']);
      });
  }

  layoutMatchingApi() {
    this.paperCheckService.layoutCheck(this.formData)
      .subscribe((response) => {
        console.log('response received is ', response['message']);
        this.sharedService.setData(true);
        this.sharedService.setLayout(response['message']);
      });

  }

  referenceMatchingApi() {

    this.paperCheckService.referenceCheck(this.formData)
      .subscribe((response) => {
        console.log('response received is ', response);
        this.sharedService.setData(true);
        this.sharedService.setReference(response);
      });
  }


}
