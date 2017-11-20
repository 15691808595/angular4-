import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any[];

  constructor(public dataService:DataService) {
    // console.log(this.dataService.getUsers());
    this.dataService.getUsers().subscribe(users=>{
      console.log(users);
      this.users=users;
    })


  }

  ngOnInit() {
  }

}
