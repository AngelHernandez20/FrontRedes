import { RegisterComponent } from './register/register.component';
import { NvarComponent } from './nvar/nvar.component';
import { UploadsComponent } from './uploads/uploads.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path :'login',component : LoginComponent },
  { path : 'home' ,component : LandingPageComponent },
  { path : '',redirectTo:'/home',pathMatch:'full' },
  {path : 'register',component: RegisterComponent},
  {path : 'modal', component:ModalComponent},
  {path : '***', pathMatch:'full', redirectTo:'modal'},
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
