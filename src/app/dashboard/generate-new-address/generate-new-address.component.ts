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
  constructor(private fb: FormBuilder, private ts: TransactionService) {
  }

  ngOnInit() {
    this.generateNewForm = this.fb.group({
      generateAddress: ['', [Validators.required]],
      generateNickName: ['', [Validators.required]],
      generatePhrase: ['', [Validators.required]],
    });
  }
  onSubmitToImport(gform: any) {
    this.ts.addNewAccount(gform.generateAddress, gform.generateNickName, gform.generatePhrase)
    console.log('welcome');
    console.log('assasassioo', gform);

  }
}
