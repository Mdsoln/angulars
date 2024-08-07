import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {

   msgService: Array<any> = [];

  constructor() {
    this.init();
  }

    init(): void{
      this.insert({
        name: 'Muddy', email: 'muddyfakih98@gmail.com', message: 'Hello, Ramadhan its you again'
      });
      this.insert({
        name: 'Fakih', email: 'muddyfakih98@gmail.com', message: 'Hello, Ramadhan its you again'
      });
      this.insert({
        name: 'Ramadhan', email: 'muddyfakih98@gmail.com', message: 'Hello, Ramadhan its you again'
      });
    }

    insert(message: {name: String, email: String, message: String}){
      this.msgService.push(message);
   }

    getAllMessages(){
    return this.msgService;
   }

    deleteMessage(index: number){
    this.msgService.splice(index, 1);
   }


}
