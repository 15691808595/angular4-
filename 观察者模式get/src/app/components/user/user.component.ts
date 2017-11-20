import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  address:Address;
  hobbies:string[];
  hello:any;//任何类型
  isEdit:boolean=false;
  users:string[];


  constructor(public dataService:DataService) {
    console.log(1);
    // this.users=this.dataService.getUsers();
  }

  ngOnInit() {
    console.log(2);
    this.name="liuweibo";
    this.age=25;
    this.address={
      street:"金科路",
      city:"上海市"
    };
    this.hobbies=["写代码","打篮球"];
  }

  onClick(){
    this.age=22;
  }
  addHobby(hobby){
    this.hobbies.unshift(hobby)
    return false;
  }
  deleteHobby(i){
    console.log(i);
    this.hobbies.splice(i,1)
  }
  toggleEdit(){
    this.isEdit=!this.isEdit;
  }

}
interface Address{
  street:string,
  city:string
}
