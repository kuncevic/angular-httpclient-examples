import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Message } from './message.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private http = inject(HttpClient);
  user = signal<Message>({ id: 1, text: 'Hello' });
  response = signal<Message | null>(null);

  callServer(port: number): void {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    const { protocol, hostname } = window.location;
    const id = Date.now();
    this.http.post<Message>(
      `${protocol}//${hostname}:${port}/ping`,
      JSON.stringify({ ...this.user(), id }),
      { headers }
    ).subscribe(data => {
      this.response.set(data);
      console.log(data);
    });
  }
}
