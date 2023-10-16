import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../../core/models/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  private baseUrl = 'http://localhost:3000'; // Substitua pela URL do seu servidor JSON (json-server)

  constructor(private http: HttpClient) { }

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.baseUrl}/stores`);
  }
}
