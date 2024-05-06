import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  citas : Array<any> = [];
  today = new Date();
  getCitas():void{
    const citasLocalStorage = localStorage.getItem("citas");
    if(citasLocalStorage){
      this.citas = JSON.parse(citasLocalStorage);
    }
  }

  ngOnInit():void{
    this.getCitas();
  }

  transformarDate(fechaString:string):Date{
      let auxDate = fechaString.split("-");
      let fecha = new Date(parseInt(auxDate[0]), parseInt(auxDate[1])-1, parseInt(auxDate[2]));
      return fecha;
  }

}
