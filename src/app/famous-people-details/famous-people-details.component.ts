import { Component, Input, OnInit } from '@angular/core';
import { Complete } from '../hall-of-fame';

@Component({
  selector: 'app-famous-people-details',
  templateUrl: './famous-people-details.component.html',
  styleUrls: ['./famous-people-details.component.css']
})
export class FamousPeopleDetailsComponent implements OnInit {

  @Input() famousPeopleDetails:Complete = {} as Complete;
  constructor() { }

  ngOnInit(): void {
  }

}
