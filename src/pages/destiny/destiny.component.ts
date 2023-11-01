import { AfterViewInit, OnInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { destiny_data } from './destiny-interface';

@Component({
  selector: 'app-destiny',
  templateUrl: './destiny.component.html',
  styleUrls: ['./destiny.component.css']
})

export class DestinyComponent implements AfterViewInit {
  planets_nav_elems!: HTMLCollectionOf<HTMLElement>;
  body!: HTMLElement;
  current_route!: string;
  display_planet!: destiny_data;
  planets_data: destiny_data[] = [
    {
      name: 'Moon',
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      planet_image: "../../assets/starter-code/assets/destination/image-moon.png",
      distance: "384,400 km",
      travel: "3 days"
    },
    {
      name: "Mars",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      planet_image: '../../assets/starter-code/assets/destination/image-mars.png',
      distance: "225 mil. km",
      travel: "9 months"
    },
    {
      name: "Europa",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      planet_image: "../../assets/starter-code/assets/destination/image-europa.png",
      distance: "628 mil. km",
      travel: "3 years"
    },
    {
      name: "Titan",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      planet_image: "../../assets/starter-code/assets/destination/image-titan.png",
      distance: "1.6 bil. km",
      travel: "7 years"
    }
  ];

  ngAfterViewInit(): void {
    this.planets_nav_elems = document.getElementsByClassName("planets-nav-elems") as HTMLCollectionOf<HTMLElement>;
    this.body = document.querySelector("body") as HTMLElement;
    this.display_planet = this.planets_data[0];
    this.planets_nav_elems[0].style.boxShadow=" 0px 2px 0px 0px white";
    console.log("xcxc",this.display_planet.planet_image);
  }

  constructor(private router: Router) {
    router.events.
      pipe(
        filter(event => event instanceof NavigationEnd)
      ).
      subscribe(event => {
        this.current_route = (event as NavigationEnd).url;
        console.log(this.current_route, "ye tha curret");
      });
  }

  ngOnInit(): void {
    this.display_planet = this.planets_data[0];
    this.display_planet.name = this.display_planet.name.toUpperCase();
    this.display_planet.distance = this.display_planet.distance.toUpperCase();
    this.display_planet.travel = this.display_planet.travel.toUpperCase();

  }
  planet_change(planet: number): void {
    for(let i=0;i<this.planets_nav_elems.length;i++){
      this.planets_nav_elems[i].style.boxShadow='none';
    }
    this.planets_nav_elems[0].style.boxShadow="none";
    switch (planet) {
      case 0:
        this.display_planet = this.planets_data[0];
        this.planets_nav_elems[0].style.boxShadow=" 0px 2px 0px 0px white";
        break;
      case 1:
        this.display_planet = this.planets_data[1];
        this.planets_nav_elems[1].style.boxShadow=" 0px 2px 0px 0px white";
        break;
      case 2:
        this.display_planet = this.planets_data[2];
        this.planets_nav_elems[2].style.boxShadow=" 0px 2px 0px 0px white";
        break;
      case 3:
        this.display_planet = this.planets_data[3];
        this.planets_nav_elems[3].style.boxShadow=" 0px 2px 0px 0px white";
        break;
      default:
        this.display_planet = this.planets_data[0];
        this.planets_nav_elems[0].style.boxShadow=" 0px 2px 0px 0px white";
        break;
    }
    this.display_planet.name = this.display_planet.name.toUpperCase();
    this.display_planet.distance = this.display_planet.distance.toUpperCase();
    this.display_planet.travel = this.display_planet.travel.toUpperCase();
  }

}


