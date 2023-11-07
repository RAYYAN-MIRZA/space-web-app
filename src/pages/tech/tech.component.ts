import { Component, OnInit, AfterViewInit } from '@angular/core';
import { tech } from './tech-interface';
import { style } from '@angular/animations';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements AfterViewInit {
  next_buttons!: HTMLCollectionOf<HTMLElement>
  current_button!: HTMLElement;
  display_tech!: tech;
  tech_data: tech[] = [
    {
      name: "Launch vehicle",
      image_portrait: "../../assets/starter-code/assets/technology/image-launch-vehicle-portrait.jpg",
      image_landscape: "../../assets/starter-code/assets/technology/image-launch-vehicle-landscape.jpg",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      name: "Spaceport",
      image_portrait: "../../assets/starter-code/assets/technology/image-spaceport-portrait.jpg",
      image_landscape: "../../assets/starter-code/assets/technology/image-spaceport-landscape.jpg",

      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      name: "Space capsule",
      image_portrait: "../../assets/starter-code/assets/technology/image-space-capsule-portrait.jpg",
      image_landscape: "../../assets/starter-code/assets/technology/image-space-capsule-landscape.jpg",
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]


  ngOnInit(): void {

    this.display_tech = this.tech_data[0];
  }

  ngAfterViewInit(): void {
    this.next_buttons = document.getElementsByClassName('next-buts') as HTMLCollectionOf<HTMLElement>
    // this.next_buttons[0]=this.current_button;    
    this.next_buttons[0].style.backgroundColor = "white";
    this.next_buttons[0].style.color = "#0b0e17";
  }

  change_image(num: number): void {
    for (let i = 0; i < 3; i++) {
      this.next_buttons[i].style.color = "white";
      this.next_buttons[i].style.backgroundColor = "transparent";
    }
    switch (num) {
      case 0:
        this.next_buttons[0].style.color = "#0b0e17";
        this.next_buttons[0].style.backgroundColor = "white";
        this.display_tech = this.tech_data[0];
        break;
      case 1:
        this.next_buttons[1].style.color = "#0b0e17";
        this.next_buttons[1].style.backgroundColor = "white";
        this.display_tech = this.tech_data[1];
        break;
      case 2:
        this.next_buttons[2].style.color = "#0b0e17";
        this.next_buttons[2].style.backgroundColor = "white";
        this.display_tech = this.tech_data[2];
        break;
    }

  }



}
