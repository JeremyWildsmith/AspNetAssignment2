import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable()
export class AccountService {
  private accountEndpoint: string;
  private _isAuthenticated: boolean;
  private authenticatedCallbacks: Array<{ (key: string): void; }> = [];
  private token: string;

  constructor(private client: HttpClient) {
    this.accountEndpoint = environment.endpoint + "account/";
  }

  public registerCallback(c: { (key: string): void; }) {
    this.authenticatedCallbacks.push(c);
  }

  public getAuthHttpOptions(): any {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    };
  }

  public isAuthenticate() {
    return this._isAuthenticated;
  }

  public Authenticate(username: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      var loginCredentials: any = {
        Username: username,
        Password: password
      };
      
      this.client.post(this.accountEndpoint, loginCredentials).toPromise().then( (r : string) => {
        if (r.length == 0)
          return reject("Invalid login credentials.");

        this._isAuthenticated = true;
        this.token = r;

        this.authenticatedCallbacks.forEach(c => {
          c(r);
        });

        resolve(r);

      }).catch(r => {
        reject(r);
      });
    });
  }
}
