import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, } from '@angular/forms';
import { TransactionService } from 'src/app/service/transaction.service';
import * as KeyPairs from "ripple-keypairs";

declare var QRCode: any;
@Component({
  selector: 'app-generate-new-address',
  templateUrl: './generate-new-address.component.html',
  styleUrls: ['./generate-new-address.component.scss']
})
export class GenerateNewAddressComponent implements OnInit {
  generateNewForm: FormGroup;
  private qrPublicAddress: any;
  private qrPublicKey: any;

  @ViewChild("qrpublicaddress",{static: false})
  public qrPublicAddressImg: ElementRef;
  public address: string;
  public seed: string;
  public publicKey: string;
  
  constructor(private fb: FormBuilder, private ts: TransactionService) {
    this.address = "";
    this.seed = "";
  }

  ngOnInit() {
    this.seed = KeyPairs.generateSeed();
    let keypair = KeyPairs.deriveKeypair(this.seed);
    this.publicKey = keypair.publicKey;
    this.address = KeyPairs.deriveAddress(this.publicKey);
    this.generateNewForm = this.fb.group({
      generateAddress: [this.address, [Validators.required]],
      generateNickName: ['', [Validators.required]],
      generatePhrase: [this.seed, [Validators.required]],
    });
  }
  onSubmitToImport(gform: any) {
    this.ts.addNewAccount(gform.generateAddress, gform.generateNickName, gform.generatePhrase)
    console.log('welcome');
    console.log('assasassioo', gform);

  }
}
