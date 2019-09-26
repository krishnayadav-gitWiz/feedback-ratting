import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feedback';
  feedbackadded = true;
  ngOnInit() {
    setTimeout( ()=> {
      this.feedbackadded = false;
    },1000);
  }
}
