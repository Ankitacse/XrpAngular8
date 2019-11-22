import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-generate-new-address',
  templateUrl: './generate-new-address.component.html',
  styleUrls: ['./generate-new-address.component.scss']
})
export class GenerateNewAddressComponent implements OnInit {
  generateNewForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.generateNewForm = this.fb.group({
      generateNewAddress: ['', [Validators.required]],
      generateNewNickName: ['', [Validators.required]],
      generateNewPhrase: ['', [Validators.required]],
    });
    //     const RippleAPI = require('ripple-lib').RippleAPI;
    // const api = new RippleAPI();
    // const address = api.generateAddress();
    // console.log('address', address.address);
    // console.log('secret', address.secret);
  }
  onSubmitToImport() {
    console.log('welcome');

  }
}
