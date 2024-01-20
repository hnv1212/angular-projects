import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  getFolder(folder: string): Observable<Mail[]> {
    return this.http.get<Mail[]>(`http://localhost:3000/messages?folder=${folder}`)
  }
}
