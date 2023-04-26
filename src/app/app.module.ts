import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PostOneComponent } from './post-one/post-one.component';
import { PostTwoComponent } from './post-two/post-two.component';
import { PostThreeComponent } from './post-three/post-three.component';
import { Page404Component } from './page404/page404.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PostFourComponent } from './post-four/post-four.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PostOneComponent,
    PostTwoComponent,
    PostThreeComponent,
    Page404Component,
    CarruselComponent,
    CarouselComponent,
    PostFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
