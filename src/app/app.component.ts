import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewTube';
  message = new FormControl('Search');
  message1 = new FormControl('Audio Search');
  message2 = new FormControl('Notifications');
  message3 = new FormControl('Create Video');
  message4 = new FormControl('Apps');
  message5 = new FormControl('Manage Profile');
  opened=false;
}
