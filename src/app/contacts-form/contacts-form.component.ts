import { Component } from '@angular/core';

@Component({
  selector: 'contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss'],
})
export class ContactsFormComponent {
  log(x: any) {
    console.log(x);
  }
}
