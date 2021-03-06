import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ChatpageComponent } from './component/chatpage/chatpage.component';
import { ListComponent } from './component/list/list.component';
import { AboutComponent } from './component/about/about.component';
import { NavComponent } from './component/nav/nav.component';
import { CmChatpageComponent } from './component/cm-chatpage/cm-chatpage.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatpageComponent,
    ListComponent,
    AboutComponent,
    NavComponent,
    CmChatpageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
   // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  //entryComponents:[ListComponent]
})
export class AppModule { }
