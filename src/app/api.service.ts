import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://closer.vlllage.com/'

  constructor(private http: HttpClient) { }

  getPublicGroups() {
    return this.http.get(this.baseUrl + 'group', {
      headers: {
        Authorization: 'closer-web'
      },
      params: {
        geo: '30.262751,-97.7254235'
      }
    })
  }
}
