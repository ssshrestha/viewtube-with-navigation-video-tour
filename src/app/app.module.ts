import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import { UploadComponent } from './upload/upload.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudioComponent } from './studio/studio.component';
@NgModule({
  declarations: [
    AppComponent,
    VideoContentComponent,
    ChipsBarComponent,
    UploadComponent,
    StudioLivestreamComponent,
    NotFoundComponent,
    StudioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, AppRoutingModule,RouterModule,
    MatToolbarModule,MatListModule,MatIconModule,MatButtonModule,MatInputModule,
    MatChipsModule,MatSidenavModule,MatCardModule,MatGridListModule,MatRippleModule,
    MatMenuModule,MatTooltipModule,MatDividerModule,MatRippleModule,MatRadioModule,
    MatDatepickerModule,MatAutocompleteModule,MatSelectModule,FormsModule,
    RouterModule,MatSnackBarModule,ReactiveFormsModule,MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
