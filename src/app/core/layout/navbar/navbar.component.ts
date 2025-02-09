import { Component, ElementRef, EventEmitter, HostBinding, Output, signal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  darkMode = signal<boolean>(false);
  @Output() dark: EventEmitter<boolean> = new EventEmitter()

  openNavbar(nav: HTMLElement, bg: HTMLElement) {
    nav.style.translate = '100%'; 
    bg.style.display = 'block';
    
  }
  closeNavbar(nav: HTMLElement, bg: HTMLElement) {
    nav.style.translate = '-100%';
    bg.style.display = 'none';
  }
  darck(mode:boolean) {
    this.darkMode.set(!this.darkMode())
    this.dark.emit(!mode)
  }

}
