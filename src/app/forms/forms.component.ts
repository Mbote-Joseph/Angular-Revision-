import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
  }
  onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
    }

}
