import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../@business/services/sharedServices';
import {PaperCheckService} from '../../../@business/services/paperCheck.service';

@Component({
  selector: 'app-lecture-summary-page',
  templateUrl: './lecture-summary-page.component.html',
  styleUrls: ['./lecture-summary-page.component.css']
})
export class LectureSummaryPageComponent implements OnInit {

  formData = new FormData();

  introduction = 'CIL consists of two phases: incremental feature selection and incremental training, for updating the knowledge of old SVM classifiers in text classification when new classes are added to the system . CIL reuses the old models of the classifier and learns only one binary sub-classifier with an additional phase of feature selection when a new class comes . in the testing phase, current classifier is applied to the vectors’ projections on the sub-spaces concerned .';
  abstract = 'machine learning; class-incremental learning; support vector machines; text classification; feature selection; Internet information filtering . Internet information filters; filtering, filtering and filtering of information . Web information filters for information filters .';
  methodology = 'In this paper, we first present a new strategy for updating SVM classifiers in an incremental manner when new classes are added to the old classification system . the proposed method will take all the original classes as one negative super class against it and using the basic binary training method on them to get a higher lever classifier . The feature selection step will also be adjusted accordingly, that is, we will use different subset of the features for different levels. The method offers a flexible choice for originally trained classes and effectively reduces the training time';

  constructor(private sharedService: SharedDataService,
              private paperCheckService: PaperCheckService) {
  }

  ngOnInit(): void {
    // this.getFile();
    // console.log(' this.formData' + this.formData);
    this.summarizationApi();
  }

  doneBtnClick() {
    // this.notifier.show({
    //   type: 'success',
    //   message: 'You are awesome! I mean it!',
    //   id: 'THAT_NOTIFICATION_ID', // Again, this is optional
    // });
  }

  summarizationApi() {
    const file = new File(['foo'], 'F:\\SLIT PROJECTS\\janith\\confluence-tool-kit\\confluence-tool-fe\\src\\assets\\files\\5G_Integrated_Radio_Transmission_Scheme_for_Low_Earth_Orbit_Satellite_Access_Network.pdf', {
      type: 'PDF',
    });

    this.formData.append('file', file[0]);
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


        console.log('result');
    this.sharedService.getFileData()
      .subscribe(result => {
          this.formData = result;
        },
        error => {
          console.warn('failed to get data', error);
        });
  }
}
