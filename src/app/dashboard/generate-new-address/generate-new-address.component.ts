import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, } from '@angular/forms';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-generate-new-address',
  templateUrl: './generate-new-address.component.html',
  styleUrls: ['./generate-new-address.component.scss']
})
export class GenerateNewAddressComponent implements OnInit {
  generateNewForm: FormGroup;
  constructor(private fb: FormBuilder,private ts:TransactionService) {
  }

  ngOnInit() {
    this.generateNewForm = this.fb.group({
      generateAddress: ['', [Validators.required]],
      generateNickName: ['', [Validators.required]],
      generatePhrase: ['', [Validators.required]],
    });
    //     const RippleAPI = require('ripple-lib').RippleAPI;
    // const api = new RippleAPI();
    // const address = api.generateAddress();
    // console.log('address', address.address);
    // console.log('secret', address.secret);
  }
  onSubmitToImport(generateAddress, generateNickName,generatePhrase) {
    this.ts.addNewAccount(generateAddress, generateNickName,generatePhrase)
    console.log('welcome');

  }
}
