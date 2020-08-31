import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  emailid: any;
  formdata: any;
  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.required),
      passwd: new FormControl("", Validators.required)
      });
      }
      onClickSubmit(data) {this.emailid = data.emailid;} 
  }


