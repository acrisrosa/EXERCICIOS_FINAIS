import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Avatar } from "./components/avatar/avatar";
import { Main } from "./components/main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Avatar, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exerc_react_Ana');
}
