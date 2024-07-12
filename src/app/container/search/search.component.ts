import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  text:string="";
  @Output() onsearchTextEmmiter:EventEmitter<string>=new EventEmitter<string>();

  textUpdating(){
    this.onsearchTextEmmiter.emit(this.text); 
    //console.log("child emmited "+this.text);
    
  }

}
