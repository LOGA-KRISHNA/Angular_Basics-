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
  @Output() 
  onsearchTextEmmiter:EventEmitter<string>=new EventEmitter<string>();

  textUpdating(){
    this.onsearchTextEmmiter.emit(this.text); 
    //console.log("child emmited "+this.text);
    
  }

/*
  //Template Referance Variable:
  searched(input: HTMLInputElement){
    this.text=input.value;
    //Contains value entered in the input elememt and assign to text when button is clicked
    this.onsearchTextEmmiter.emit(this.text);
    //emit the ouput for particular product
  }

*/

}
