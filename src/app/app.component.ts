import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy';
  persons: string[] = ['Adeolu', 'Jackson', 'Edith'];

  onPersonCreated(name: string) {
    this.persons.push(name);
  }
}
