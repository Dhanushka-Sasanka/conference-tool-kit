import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaperCheckService {
  private readonly baseUrl;
  private readonly paperCheckUrl;
  private readonly layoutCheckUrl;
  private readonly referenceCheckUrl;
  private readonly summarizationUrl;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.paperCheckUrl = environment.paperCheckUrl;
    this.layoutCheckUrl = environment.layoutCheckUrl;
    this.referenceCheckUrl = environment.referenceCheckUrl;
    this.summarizationUrl = environment.summarizationUrl;
  }

  paperCheck(request: FormData): Observable<any[]> {
    return this.http.post<any>(this.paperCheckUrl, request);
  }

  layoutCheck(request: FormData): Observable<any[]> {
    return this.http.post<any>(this.layoutCheckUrl, request);
  }

  referenceCheck(request: FormData): Observable<any[]> {
    return this.http.post<any>(this.referenceCheckUrl, request);
  }

  summarization(request: FormData): Observable<any[]> {
    console.log("REC"+ request);
    return this.http.post<any>(this.summarizationUrl, request);
  }

}
