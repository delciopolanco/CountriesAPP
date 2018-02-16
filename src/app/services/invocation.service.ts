import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';


@Injectable()

export class InvocationService {
  private url: String;
  constructor(private http: Http) { }

  public GET: string = 'get';
  public POST: string = 'post';
  public PUT: String = 'put';
  public DELETE: String = 'delete';
  public PATCH: String = 'patch';

  public invokeBackendService = <T, X>(
    requestType: string,
    request: string,
    body: X = null,
    options: RequestOptionsArgs = null): Promise<T> => {
    return (requestType === this.POST) ? this.postMethod<T, X>(request, body, options) :
      (requestType === this.PUT) ? this.putMethod<T, X>(request, body) :
        (requestType === this.GET) ? this.getMethod<T>(request) :
          (requestType === this.DELETE) ? this.deleteMethod<T, X>(request, body) :
            (requestType === this.PATCH) ? this.patchMethod<T, X>(request, body) : null;
  }

  private methodDispatcher = <T>(obs: Observable<Response>): Promise<T> => {
    return obs
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  private getMethod = <T>(request: string): Promise<T> => {
    return this.methodDispatcher(this.http.get(request));
  }
  private postMethod = <T, X>(request: string, body: X, options: RequestOptionsArgs): Promise<T> => {
    return this.methodDispatcher(this.http.post(request, JSON.stringify(body), options));
  }
  private putMethod = <T, X>(request: string, body: X): Promise<T> => {
    return this.methodDispatcher(this.http.put(request, JSON.stringify(body)));
  }
  private deleteMethod = <T, X>(request: string, body: X): Promise<T> => {
    return this.methodDispatcher(this.http.delete(request, JSON.stringify(body)));
  }
  private patchMethod = <T, X>(request: string, body: X): Promise<T> => {
    return this.methodDispatcher(this.http.patch(request, JSON.stringify(body)));
  }
  private extractData(res: any) {
    console.log('Respuesta: ', JSON.parse(res._body));
    return JSON.parse(res._body) || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
