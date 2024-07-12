import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number=0

  @Input()
  instock:number=0;

  @Input()
  outstock:number=0;
  
  selectedbutton:string='all';

  @Output() selectedEvent=new EventEmitter<string>();
  
  eventemmitted(selectedbutton:string){
    this.selectedbutton=selectedbutton;
    console.log(this.selectedbutton+" from child");
    
    this.selectedEvent.emit(this.selectedbutton);
    //console.log(this.selectedbutton);
  }
}
