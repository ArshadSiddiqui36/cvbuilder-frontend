import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ResumeCreateComponent } from './components/resume-create/resume-create.component';
import { ResumePreviewComponent } from './components/resume-preview/resume-preview.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path:'resume-create', component:ResumeCreateComponent },
  { path:'resume-preview', component:ResumePreviewComponent },
  { path:'template', component:TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
