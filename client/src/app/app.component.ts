import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers , RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Test';
  user = { id : 1, name : 'Hello'};

  constructor(private http: HttpClient) { }

  callServer() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    this.http.post('http://127.0.0.1:3000/ping', JSON.stringify(this.user), {
      headers: new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json')
    })
    .subscribe(data => {
      console.log(data);
      // do something here
    });
  }
}
