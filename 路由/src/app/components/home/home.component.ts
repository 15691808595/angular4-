import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any[];
  user={
    id:"",
    name:"",
    email:"",
    phone:""
  };

  isEdit:boolean=false;
  constructor(public dataService:DataService) {
    // console.log(this.dataService.getUsers());
    this.dataService.getUsers().subscribe(users=>{
      // console.log(users);
      this.users=users;
    })


  }

  ngOnInit() {
  }

  onSubmit(isEdit){
    if(isEdit){
      this.dataService.updateUser(this.user).subscribe(user=>{
        //删除当前的
        for(let i=0;i<this.users.length;i++){
          if(this.users[i].id==this.user.id){
            this.users.splice(i,1);
          }
        }
        //添加更新的
        this.users.unshift(this.user);
      })
    }else {
      this.dataService.addUser(this.user).subscribe(user=>{
        // console.log(user);
        this.users.unshift(user);
      })
    }

  }
  onDeleteClick(id){
    this.dataService.deleteUser(id).subscribe(res=>{
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].id==id){
          this.users.splice(i,1);
        }
      }
    })
  }
  onEditClick(user){
    this.isEdit=true;
    this.user=user;
  }
}
