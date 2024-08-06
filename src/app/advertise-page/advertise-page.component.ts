import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from '../message-details/message-details.component';

@Component({
  selector: 'app-advertise-page',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, MessageDetailsComponent],
  templateUrl: './advertise-page.component.html',
  styleUrl: './advertise-page.component.scss'
})
export class AdvertisePageComponent {

  name: string;
  email: string;
  message: string;
  isSubmitted: boolean = false;
  tableMessage: Array<any> = [];

  constructor() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  onSubmit(){
    this.isSubmitted = true;
    this.tableMessage.push({
      'name': this.name,
      'email': this.email,
      'message': this.message
    })
  }
}
