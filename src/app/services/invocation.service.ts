import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class InvocationService {

  public GET: string = 'get';
  public POST: string = 'post';
  public PUT: String = 'put';
  public DELETE: String = 'delete';
  public PATCH: String = 'patch';

  constructor(private http: HttpClient) { }


  public invokeBackendService = <T, X>(
    requestType: string,
    request: string,
    body: X = null,
    options: HttpHeaders = null): Observable<T> => {
    return (requestType === this.GET) ? this.getMethod<T>(request) :
      (requestType === this.POST) ? this.postMethod<T, X>(request, body) : null;
  }

  private methodDispatcher = <T>(obs: Observable<T>): Observable<T> => {
    return obs.do(this.extractData).catch(this.handleError);

  }
  private getMethod = <T>(request: string): Observable<T> => {
    return this.methodDispatcher(this.http.get<T>(request));
  }

  private postMethod = <T, X>(request: string, body: X): Observable<T> => {
    return this.methodDispatcher(this.http.post<T>(request, JSON.stringify(body)));
  }

  private extractData(data: any) {
    return data;
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message);
  }
}
