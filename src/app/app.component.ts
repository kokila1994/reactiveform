import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'form-procedure';
register:any;
holdfirstname:any;


  constructor(){ }
  ngOnInit(): void {
    this.register=new FormGroup({
      "firstname" : new FormControl('kokila',[Validators.required]),
      "lastname" : new FormControl('satish',[Validators.required]),
      "email" : new FormControl('abc@gmail.com',[Validators.required]),
      "password" : new FormControl('kokila@123',[Validators.required]),
      "confirmpassword" : new FormControl('kokila@123',[Validators.required]),
    });
  }
 

 get vfirstname(){
   return this.register.get("firstname");
 }
 get vlastname(){
  return this.register.get("lastname");
}
get vemail(){
  return this.register.get("email");
}
get vpassword(){
  return this.register.get("password");
}
get vconfirmpassword(){
  return this.register.get("confirmpassword");
}


GetData(){
  console.log(this.register);
  localStorage.setItem("firstname",this.register.value.firstname);
  localStorage.setItem("lastname",this.register.value.lastname);
  localStorage.setItem("email",this.register.value.email);
  localStorage.setItem("password",this.register.value.password);
  localStorage.setItem("confirmpassword",this.register.value.confirmpassword);
 
  this.holdfirstname= localStorage.getItem("firstname");

}

}


