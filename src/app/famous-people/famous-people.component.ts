import { Component, OnInit } from '@angular/core';
import { HallOfFame } from '../hall-of-fame';
import { HallOfFameService } from '../hall-of-fame.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

// hallOfFame:HallOfFame [] = [];
hallOfFame: HallOfFame = {} as HallOfFame;

  constructor(private hallOfFameService:HallOfFameService) { }

  ngOnInit(): void
  {
    this.hallOfFameService.getFamousPerson().subscribe((response: HallOfFame) => 
    {
      this.hallOfFame = response;
      console.log(response);
    });
  }

}
