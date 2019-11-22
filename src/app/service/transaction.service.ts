import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url = 'http://localhost:4000/transaction';
  constructor(private http: HttpClient) { }
  //add new user account
  addNewAccount(generateAddress, generateNickName, generatePhrase) {
    const obj = {
      generateAddress: generateAddress,
      generateNickName: generateNickName,
      generatePhrase: generatePhrase
    };
    console.log(obj);
    this.http.post(`${this.url}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}
