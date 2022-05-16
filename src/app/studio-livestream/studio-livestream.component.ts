import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatNativeDateModule} from '@angular/material/core';
export interface Guest {
  name: string;
}
@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent implements OnInit {
  // date = new FormControl(new Date());
  // serializedDate = new FormControl(new Date().toISOString());
  liveForm!: FormGroup;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  guests: Guest[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our guest
    if (value) {
      this.guests.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(guest: Guest): void {
    const index = this.guests.indexOf(guest);

    if (index >= 0) {
      this.guests.splice(index, 1);
    }
  }


  
  constructor(formBuilder:FormBuilder,private _snackBar: MatSnackBar) {
    this.liveForm=formBuilder.group({
      'title':new FormControl('',[Validators.required,Validators.maxLength(100)]),
      'startdate':new FormControl('',Validators.required),
      'fromtime':new FormControl('',Validators.required),
      'totime':new FormControl('',Validators.required),
      'enddate':new FormControl(''),
      'text':new FormControl(''),
      'chip':new FormControl(''),
    });
   }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this._snackBar.open("Your live stream event is scheduled successfully",'',{duration:5000
  });
}
  live(){
    console.table(this.liveForm.value);
  }
}
function Video(Video: any) {
  throw new Error('Function not implemented.');
}

