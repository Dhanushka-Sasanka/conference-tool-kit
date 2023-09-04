import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../@business/services/sharedServices';
import {PaperCheckService} from '../../../@business/services/paperCheck.service';

@Component({
  selector: 'app-lecture-summary-page',
  templateUrl: './lecture-summary-page.component.html',
  styleUrls: ['./lecture-summary-page.component.css']
})
export class LectureSummaryPageComponent implements OnInit {

  formData: FormData;

  introduction;
  abstract;
  methodology;

  constructor(private sharedService: SharedDataService,
              private paperCheckService: PaperCheckService) {
  }

  ngOnInit(): void {
    Promise.resolve(this.getFile())
      .then((res) => {
        console.log(res);
        this.summarizationApi();
      }).catch((err) => {
      console.log('ERROR OCCURRED.' + err);
    });

  }

  doneBtnClick() {
    // this.notifier.show({
    //   type: 'success',
    //   message: 'You are awesome! I mean it!',
    //   id: 'THAT_NOTIFICATION_ID', // Again, this is optional
    // });
  }

  summarizationApi() {
    this.paperCheckService.summarization(this.formData)
      .subscribe((response) => {
        console.log('response received is ', response['introduction']);
        console.log('response received is ', response['abstract']);
        console.log('response received is ', response['methodology']);
        this.introduction = response['introduction'];
        this.abstract = response['abstract'];
        this.methodology = response['methodology'];

      });
  }

  private getFile() {
    this.sharedService.getFileData()
      .subscribe(result => {
          this.formData = result;
        },
        error => {
          console.warn('failed to get data', error);
        });
  }
}
