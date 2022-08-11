import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { HallOfFame } from './hall-of-fame';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {

apiUrl:string = "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json"

  constructor(private http:HttpClient) { }

  getFamousPerson():any
  {
    return this.http.get(this.apiUrl);
  }
}
