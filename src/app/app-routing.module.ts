import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/nav/nav.component';
import { ChatpageComponent } from './component/chatpage/chatpage.component';
import { CmChatpageComponent } from './component/cm-chatpage/cm-chatpage.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'nav', component: NavComponent },
  { path: 'DM', component: ChatpageComponent },
  { path: 'CM', component: CmChatpageComponent },
  {path: 'register',component:RegisterComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
