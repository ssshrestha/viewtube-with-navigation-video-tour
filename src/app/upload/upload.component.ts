import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatNativeDateModule} from '@angular/material/core';

export interface Video {
  name: string;
}


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  upload(value:any){
    console.table(value);
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  videos: Video[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our video
    if (value) {
      this.videos.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(video: Video): void {
    const index = this.videos.indexOf(video);

    if (index >= 0) {
      this.videos.splice(index, 1);
    }

  }
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  openSnackBar(message: string) {
    this._snackBar.open('Your video has been uploaded successfully','',{duration:5000
  });
    
  }
}


