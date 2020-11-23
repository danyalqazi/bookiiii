import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  public signin=[];
  
  
  

  submitForm(): void {
    console.log(this.validateForm.value);
    this._LoginService.signin(this.validateForm.value).subscribe(data =>{
      console.log(data);
      console.log(data.code);
      
      if(data.code == 200)
      this.router.navigate(['/dashboard']);
      
    })
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }
  }

  // submitForm(): void{
  //   if(this.validateForm.valid){
  //     this.LoginService.signin().subscribe(result=>{
  //       if(result.success){
  //         console.log(result);
  //         alert(result.message);
  //       }else{
  //         alert(result.message);
  //       }
      
  //     });
  //   }
  // }
  constructor(private _LoginService:LoginService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    // this._LoginService.signin()
    // .subscribe(data=>this.signin=data);

    this.validateForm = this.fb.group({
      email: [null,[Validators.email, Validators.required]],
      password: ['',[Validators.required]]
    });
    
  }


 

}
