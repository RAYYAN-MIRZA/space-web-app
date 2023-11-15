import { Component, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  root!: HTMLElement;
  title = 'space-web-app';
  ham!: HTMLElement;
  ham_menu!: HTMLElement;
  body!: HTMLElement;
  current_route!: string;
  routing_map = new Map<string, number>([
    ["/home", 0],
    ["/destination", 1],
    ["/crew", 2],
    ["/technology", 3]
  ]);

  constructor(private router: Router) {
    console.log(router.url);

    router.events.
      pipe(
        filter(event => event instanceof NavigationEnd)
      ).
      subscribe(event => {
        this.current_route = (event as NavigationEnd).url;
        console.log(this.current_route, "ye tha currnet");
        this.route_changed(this.current_route);
        console.log(event);
      });
  }
  ngAfterViewInit(): void {
    this.root = document.documentElement;
    this.body = document.querySelector("body") as HTMLElement;
    this.ham_menu = document.querySelector(".ham_menu") as HTMLElement;
    this.ham = document.querySelector(".ham") as HTMLElement;
  }

  route_changed(route: string): void {

    switch (this.routing_map.get(route)) {
      case 0:
        this.root.style.setProperty('--image-path-desktop', 'url("../assets/starter-code/assets/home/background-home-desktop.jpg")');
        this.root.style.setProperty('--image-path-tablet', 'url("../assets/starter-code/assets/home/background-home-tablet.jpg")');
        this.root.style.setProperty('--image-path-mobile', 'url("../assets/starter-code/assets/home/background-home-mobile.jpg")');
        break;
      case 1:
        this.root.style.setProperty('--image-path-desktop', 'url("../assets/starter-code/assets/destination/background-destination-desktop.jpg")');
        this.root.style.setProperty('--image-path-tablet', 'url("../assets/starter-code/assets/destination/background-destination-tablet.jpg")');
        this.root.style.setProperty('--image-path-mobile', 'url("../assets/starter-code/assets/destination/background-destination-mobile.jpg")');
        break;
      case 2:
        this.root.style.setProperty('--image-path-desktop', 'url("../assets/starter-code/assets/crew/background-crew-desktop.jpg")');
        this.root.style.setProperty('--image-path-tablet', 'url("../assets/starter-code/assets/crew/background-crew-tablet.jpg")');
        this.root.style.setProperty('--image-path-mobile', 'url("../assets/starter-code/assets/crew/background-crew-mobile.jpg")');
        break;
      case 3:
        this.root.style.setProperty('--image-path-desktop', 'url("../assets/starter-code/assets/technology/background-technology-desktop.jpg")');
        this.root.style.setProperty('--image-path-tablet', 'url("../assets/starter-code/assets/technology/background-technology-tablet.jpg")');
        this.root.style.setProperty('--image-path-mobile', 'url("../assets/starter-code/assets/technology/background-technology-mobile.jpg")');
        break;

      default:
        this.root.style.setProperty('--image-path-desktop', 'url("../assets/starter-code/assets/home/background-home-desktop.jpg")');
        this.root.style.setProperty('--image-path-tablet', 'url("../assets/starter-code/assets/home/background-home-tablet.jpg")');
        this.root.style.setProperty('--image-path-mobile', 'url("../assets/starter-code/assets/home/background-home-mobile.jpg")');
        console.log("HAn meri jan");
        break;
    }
  }


  open_ham(): void {
    this.ham.style.display = "none";
    this.ham_menu.style.display = "flex";
    this.ham_menu.style.flexDirection = "column";
  }

  close_ham(): void {
    this.ham_menu.style.display = "none";
    this.ham.style.display = "flex";

  }



}
