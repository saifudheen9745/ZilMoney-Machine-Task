import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from './user-details.service';
import { userDetails } from 'src/app/model/user.model';
import { catchError, take } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  nameKey:string
  companyKey:string
  designationKey:string

  userDetailsArray:userDetails[] = []

  constructor(private userService:UserDetailsService){}
  
  ngOnInit(): void {
      this.getData()
  }

  getData():void{
    this.userService.getUserDetails().pipe(
      take(1),
      catchError((err:Error)=>{
        throw err
      })
    ).subscribe((data:userDetails[])=>{
      this.userDetailsArray = data
    })
  }

  catchKey(data:{value:string,name:string}):void{
    if(data.name === 'name'){
      this.nameKey = data.value
    }else if(data.name === 'company'){
      this.companyKey = data.value
    }else{
      this.designationKey = data.value
    }
    
  }
}
