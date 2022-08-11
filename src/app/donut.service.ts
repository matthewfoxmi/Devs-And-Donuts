import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

  getDonuts():any
  {
    return this.http.get("https://grandcircusco.github.io/demo-apis/planets.json");
  }
}
