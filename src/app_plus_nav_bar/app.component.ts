import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'space-web-app';
  ham!:HTMLElement;
  ham_menu!:HTMLElement;


  
  ngAfterViewInit(): void {
    this.ham_menu=document.querySelector(".ham_menu") as HTMLElement;
    this.ham=document.querySelector(".ham") as HTMLElement;
  }
  open_ham():void{
    this.ham.style.display="none";
    this.ham_menu.style.display="flex";
    this.ham_menu.style.flexDirection="column";
  }

  close_ham():void{
  this.ham_menu.style.display="none";
  this.ham.style.display="flex";

  }



}
