import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "./product-list/product-list.component";


@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, CommonModule, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
   name:string="loga";

   searchedText:string="";

   searchedTextFun(event:string){
    //console.log(event);
    
    this.searchedText=event;
   }
   
}
