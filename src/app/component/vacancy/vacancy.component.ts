import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent {

  data={
    stdId:"",
    name:"",
    marks:""
  }

  constructor(private student: StudentService){

  }
  submitTheForm(){
    console.log("Submitting the Form");
    console.log(this.data);
    this.student.sendData(this.data).subscribe(
      response => {
        console.log(response);
        alert("Data Submitted");
      },
      error => {
        console.log(error);
        alert("Data Not Submitted");
      }
    )
  }

}
