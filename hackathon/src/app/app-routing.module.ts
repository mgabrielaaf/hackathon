import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { HomeComponent } from './components/home/home.component';
import { InserirComponent } from './components/inserir/inserir.component';
import { MenuPageLayoutComponent } from './components/menu-page-layout/menu-page-layout.component';

const routes: Routes = [
  {path:'',
  component: MenuPageLayoutComponent,
  children:[{
    path:'home',
    component: HomeComponent,
  },

  {
    path:'feed',
    component: FeedComponent,
  },

  {
    path:'inserir',
    component: InserirComponent,
  }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }