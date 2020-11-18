import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  public login=[];
  

  
  

  // submitForm(): void {
  //   for (const i in this.validateForm.controls) {
  //     this.validateForm.controls[i].markAsDirty();
  //     this.validateForm.controls[i].updateValueAndValidity();
  //   }
  // }

  submitForm(): void{
    if(this.validateForm!.valid){
      this.LoginService.career(this.validateForm!.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);
        }else{
          alert(result.message);
        }
      
      });
    }
  }
  constructor(private LoginService:LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.LoginService.getCareer()
    .subscribe(data=>this.login=data);

    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }


 

}
