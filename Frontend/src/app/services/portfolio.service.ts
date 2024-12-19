import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'https://shreyasportfolioapp.netlify.app/api/portfolio';

  constructor(private http: HttpClient) { }

  getPortfolio(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addPortfolio(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updatePortfolio(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deletePortfolio(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
