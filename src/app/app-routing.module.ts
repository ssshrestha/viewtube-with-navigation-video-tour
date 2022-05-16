import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router' 
import { UploadComponent } from './upload/upload.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';

const routes: Routes=[
  {path:'', component:AppComponent},
  {path:'upload', component:UploadComponent,
  children:[{path:'live',component:StudioLivestreamComponent},
  {path:'upload',component:UploadComponent}]},
  {path:'**',component:NotFoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
