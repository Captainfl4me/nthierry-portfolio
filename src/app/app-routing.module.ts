import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { CvComponent } from './pages/cv/cv.component';
import { FlfcComponent } from './pages/portfolio/flfc/flfc.component';
import { RoverComponent } from './pages/portfolio/rover/rover.component';
import { CwebserverComponent } from './pages/portfolio/cwebserver/cwebserver.component';
import { TurtlecoreComponent } from './pages/portfolio/turtlecore/turtlecore.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    children: [
      {
        path: '',
        component: PortfolioComponent
      },
      {
        path: 'flfc',
        component: FlfcComponent
      },
      {
        path: 'rover',
        component: RoverComponent
      },
      {
        path: 'cwebserver',
        component: CwebserverComponent
      },
      {
        path: 'turtle-core',
        component: TurtlecoreComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'CV',
    component: CvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
