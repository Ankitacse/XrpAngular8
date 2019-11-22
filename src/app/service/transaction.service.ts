import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  uri = 'http://localhost:4200/transaction';
  constructor(private http: HttpClient) { }

  //add new user account
  addNewAccount(generateAddress,generateNickName, generatePhrase) {
    const obj = {
      generateAddress: generateAddress,
      generateNickName: generateNickName,
      generatePhrase:  generatePhrase
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
