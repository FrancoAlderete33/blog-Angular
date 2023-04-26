import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { PostOneComponent } from './post-one/post-one.component';
import { PostThreeComponent } from './post-three/post-three.component';
import { PostTwoComponent } from './post-two/post-two.component';
import { PostFourComponent } from './post-four/post-four.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'post-1', component: PostOneComponent },
  { path: 'post-2', component: PostTwoComponent },
  { path: 'post-3', component: PostThreeComponent },
  { path: 'post-4', component: PostFourComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
