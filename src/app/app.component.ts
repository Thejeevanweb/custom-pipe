import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  iscondition= true;
  monthno="";
  no = 1;

  today = new Date()

  months=["jan", "feb", "mar", "apr", "may", "jun", "jull", "aug", "oct", "sep", "nov", "dec"]

ngOnInit(): void{

  setInterval(()=>{
    this.iscondition = !this.iscondition;
  },1000);
}

changeme(event:Event){
  let ctrl= <HTMLSelectElement>event.target;
  let mon =  Number(ctrl.value);
  this.monthno=this.months[mon -1];
}



}
