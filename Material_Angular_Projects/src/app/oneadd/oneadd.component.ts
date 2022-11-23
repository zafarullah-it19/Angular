import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-oneadd',
  templateUrl: './oneadd.component.html',
  styleUrls: ['./oneadd.component.css']
})
export class OneaddComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }

}
