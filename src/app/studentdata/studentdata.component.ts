import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.scss']
})
export class StudentdataComponent {
  studentfetched:any;
  stdId:any

  constructor(private student:StudentService){

  }
  Gettingthedata(){
    console.log("Getting the data");
    console.log(this.stdId);
    this.student.getData(this.stdId).subscribe(
      response => {
        this.studentfetched=response;
        console.log(this.studentfetched);
        alert("Data is Present");
      },
      error => {
        console.log(error);
        alert("No Data Belongs to this ID");
      }
    )

}
}
