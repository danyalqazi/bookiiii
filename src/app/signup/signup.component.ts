import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: "info-circle",
    theme: "twotone"
  };

  submitForm(): void {

    
    console.log(this.validateForm.value);
    this._signup.signup(this.validateForm.value).subscribe(data =>{
      console.log(data);
      console.log(data.code);
      
      // if(data.code == 200)
      // this.router.navigate(['/dashboard']);
      
    })

    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }

    // console.log(this.validateForm.value);
    // const careerData=new FormData();
    

    // this._signup.signup(this.validateForm.value)
    // .subscribe(
    //   response =>console.log('Success!',response),
    //   error =>console.error('Error!',error));
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private _signup:LoginService , private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]]
    });
  }

}
