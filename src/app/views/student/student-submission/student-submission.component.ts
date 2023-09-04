import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../@business/services/sharedServices';

@Component({
  selector: 'app-student-submission',
  templateUrl: './student-submission.component.html',
  styleUrls: ['./student-submission.component.css']
})
export class StudentSubmissionComponent implements OnInit {


  isPaperOk: boolean = false;

  isLayoutOk: boolean = false;

  isReferenceOk: boolean = false;
  type: any;
  layout: any;
  reference: any;

  percentage: string = '0';

  constructor(private sharedService: SharedDataService) {
  }

  ngOnInit(): void {

    this.sharedService.getData()
      .subscribe(result => {
          console.log(result);
          this.isPaperOk = result;
          this.isLayoutOk = result;
          this.isReferenceOk = result;
        },
        error => {
          console.warn('failed to get data', error);
        });
    this.getPaperMatching();
    this.getLayout();
    this.getReference();
  }

  private getPaperMatching() {
    this.sharedService.getPaperType()
      .subscribe(result => {
          console.log(result);
          this.type = result;
          this.percentage = '33';
        },
        error => {
          console.warn('failed to get data', error);
        });
  }

  private getLayout() {
    this.sharedService.getLayout()
      .subscribe(result => {
          this.layout = result;
          this.percentage = '66';
        },
        error => {
          console.warn('failed to get data', error);
        });
  }

  private getReference() {
    this.sharedService.getReference()
      .subscribe(result => {
          this.reference = result;
          this.percentage = '100';
        },
        error => {
          console.warn('failed to get data', error);
        });
  }
}
