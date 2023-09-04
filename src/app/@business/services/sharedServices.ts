import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public messageSubject = new Subject();
  private paperType = new Subject();
  private layout = new Subject();
  private reference = new Subject();
  private file = new Subject();

  constructor() {
  }

  public setData(value: boolean) {
    this.messageSubject.next(value);
  }

  public getData(): Observable<any> {
    return this.messageSubject.asObservable();
  }


  public setPaperType(value) {
    this.paperType.next(value);
  }

  public getPaperType(): Observable<any> {
    return this.paperType.asObservable();
  }

  public setLayout(value) {
    this.layout.next(value);
  }

  public getLayout(): Observable<any> {
    return this.layout.asObservable();
  }

  public setReference(value) {
    this.reference.next(value);
  }

  public getReference(): Observable<any> {
    return this.reference.asObservable();
  }

  public setFileData(value) {
    this.file.next(value);
  }

  public getFileData(): Observable<any> {
    return this.file.asObservable();
  }
}
