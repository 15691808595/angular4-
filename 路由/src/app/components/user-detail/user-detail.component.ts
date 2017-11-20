import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { DataService } from "../../services/data.services";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id:number;
  user:any={};
  constructor(
    public dataService:DataService,
    private route: ActivatedRoute,
    private router:Router
  ) {
    this.route.params.subscribe((params:Params)=>{
      this.id=params["id"];
    })

  }

  ngOnInit() {
    this.dataService.getSingleUsers(this.id).subscribe((user)=>{
      console.log(typeof user);
      this.user=user;
    })
  }

}
