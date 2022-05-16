import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router' 
import { UploadComponent } from './upload/upload.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { StudioComponent } from './studio/studio.component';

const routes: Routes=[
  {path:'', component:AppComponent},
  {path:'studio',component:StudioComponent,children:[
    {path:'upload',component:UploadComponent},
    {path:'live',component:StudioLivestreamComponent}
  ]},
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
