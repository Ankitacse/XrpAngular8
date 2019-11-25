import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerateNewAddressComponent } from '../generate-new-address/generate-new-address.component';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-address-options',
  templateUrl: './address-options.component.html',
  styleUrls: ['./address-options.component.scss']
})
export class AddressOptionsComponent implements OnInit {
  addListDisplay: boolean = false;
  displayRoutes:boolean=false;
  public dialogRef: MatDialogRef<GenerateNewAddressComponent>;
  constructor(private router: Router,private dialog: MatDialog) { }

  ngOnInit() {
  }
  addOption() {
    this.addListDisplay = true;
    this.router.navigate(['/']);
  }
  generateNew() {
    this. displayRoutes=true;
    // this.router.navigate(['/generateNewAddress']);
    const dialogConfig = new MatDialogConfig();
    this.dialogRef = this.dialog.open(GenerateNewAddressComponent, dialogConfig);
  }
  addExisting(){
    this. displayRoutes=true;
    // this.router.navigate(['/addExistingAddress']);
  }
}
