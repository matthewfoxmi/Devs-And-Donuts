import { Component, OnInit } from '@angular/core';
import { Donut } from '../donut';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit 
{

  donuts:Donut[] = [];

  constructor(private donutService:DonutService) { }

  ngOnInit(): void
 {
  this.donutService.getDonuts().subscribe((response:Donut[]) =>
  {
      this.donuts = response;
      console.log(response);
  });
 }

 
}
