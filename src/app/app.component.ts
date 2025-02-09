import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assiment3';
  darkMode = signal<boolean>(false);
  dark(mode: boolean) {
    this.darkMode.set(mode)
  }
  @HostBinding('class.dark') get mode() { return this.darkMode(); }
}
