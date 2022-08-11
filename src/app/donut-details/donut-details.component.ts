import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut, Result } from '../donut';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {


  displayDonut:Result = {} as Result;

  constructor(private route:ActivatedRoute, private donutService:DonutService) { }

  ngOnInit(): void  
  {
    const routeParams = this.route.snapshot.paramMap;
    let id:number= Number(routeParams.get("id"))!;

    this.donutService.getDonuts().subscribe((response: Result[])=>
    {
      this.displayDonut = response.find(p => p.id == id)!;
    });

  }

}
