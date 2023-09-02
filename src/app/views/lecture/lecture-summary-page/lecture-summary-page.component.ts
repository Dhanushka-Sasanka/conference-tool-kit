import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lecture-summary-page',
  templateUrl: './lecture-summary-page.component.html',
  styleUrls: ['./lecture-summary-page.component.css']
})
export class LectureSummaryPageComponent implements OnInit {

  // private readonly notifier: NotifierService;
  //
  // constructor(notifierService: NotifierService) {
  //   this.notifier = notifierService;
  // }

  constructor() {
  }

  ngOnInit(): void {
  }

  doneBtnClick() {
    // this.notifier.show({
    //   type: 'success',
    //   message: 'You are awesome! I mean it!',
    //   id: 'THAT_NOTIFICATION_ID', // Again, this is optional
    // });
  }
}
