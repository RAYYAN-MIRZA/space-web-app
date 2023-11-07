import { Component, AfterViewInit, OnInit } from '@angular/core';
import { crew_interface } from './crew-interface';
@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements AfterViewInit {
  next_buttons!: HTMLCollectionOf<HTMLElement>;
  next_buttons_two!: HTMLCollectionOf<HTMLElement>;
  display_crew!: crew_interface;
  crew_data: crew_interface[] = [
    {
      occupation: "Commander",
      name: "Douglas Hurley",
      description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      ,
      crew_member_image: "../../assets/starter-code/assets/crew/image-douglas-hurley.png"
    },
    {
      occupation: "Mission Specialist",
      name: "Mark Shuttleworth",
      description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      crew_member_image: "../../assets/starter-code/assets/crew/image-mark-shuttleworth.png"
    },
    {
      occupation: "Pilot",
      name: "Victor Glover",
      description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      crew_member_image: "../../assets/starter-code/assets/crew/image-victor-glover.png"
    },
    {
      occupation: "Flight Engineer",
      name: "Anousheh Ansari",
      description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      crew_member_image: "../../assets/starter-code/assets/crew/image-anousheh-ansari.png"
    }
  ]
  ngOnInit(): void {
    console.log("Sasasas");
    this.display_crew = this.crew_data[0];
    console.log("sdsdsdsdsd===", this.display_crew);
    console.log("xxx==", this.crew_data);
  }
  ngAfterViewInit(): void {
    this.next_buttons = document.getElementsByClassName('next-button') as HTMLCollectionOf<HTMLElement>;
    this.next_buttons_two = document.getElementsByClassName('next-button-two') as HTMLCollectionOf<HTMLElement>;
    this.next_buttons_two[0].style.opacity = "1";
    this.next_buttons[0].style.opacity = "1";
  }

  memberChange(num: number): void {
    for (let i = 0; i < this.next_buttons.length; i++){
      this.next_buttons[i].style.opacity = '0.174';
      this.next_buttons_two[i].style.opacity = "0.174";
    }

    switch (num) {
      case 0:
        this.display_crew = this.crew_data[0];
        this.next_buttons[0].style.opacity = "1";
        this.next_buttons_two[0].style.opacity = "1";
        break;
      case 1:
        this.display_crew = this.crew_data[1];
        this.next_buttons[1].style.opacity = "1";
        this.next_buttons_two[1].style.opacity = "1";
        break;
      case 2:
        this.display_crew = this.crew_data[2];
        this.next_buttons[2].style.opacity = "1";
        this.next_buttons_two[2].style.opacity = "1";
        break;
      case 3:
        this.display_crew = this.crew_data[3];
        this.next_buttons[3].style.opacity = "1";
        this.next_buttons_two[3].style.opacity = "1";
        break;
    }
  }
}
