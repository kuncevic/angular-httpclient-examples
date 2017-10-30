import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = <Message> { id : 1, text : 'Hello'};

  constructor(private http: HttpClient) { }

  callServer(port) {
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    // ports:
    // :3000 - to call nodejs server
    // :3001 - to call aspnet core server
    this.http.post<Message>(`http://127.0.0.1:${port}/ping`, JSON.stringify(this.user), {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
    });
  }
}
