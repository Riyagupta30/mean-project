import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccountserviceService} from './account/accountservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticlesModule } from './articles/articles.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { RouterModule } from '@angular/router';
import {AccountModule} from './account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArticlesModule,
    StaticpagesModule,
    AccountModule,
    AppRoutingModule,
    CommonModule
    
  ],
  
  providers: [AccountserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
