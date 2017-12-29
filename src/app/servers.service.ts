import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        const headers = new Headers({
            'Content-Type': 'application/json'});
        // return this.http.post('https://ng-http-b9645.firebaseio.com/data.json',
        //     servers,
        //     {headers: headers});
        return this.http.put('https://ng-http-b9645.firebaseio.com/data.json',
            servers,
            {headers: headers});
    };

    getServers() {
        return this.http.get('https://ng-http-b9645.firebaseio.com/data')
            .map(
                (response: Response) => {
                    const data = response.json();
                    for ( const server of data) {
                        server.name = server.name;
                    }
                    return data;
                }
            ).catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong!');
                }
            );
    };
}
