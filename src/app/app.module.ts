import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { CvComponent } from './pages/cv/cv.component';
import { ProjectComponent } from './components/project/project.component';
import { FlfcComponent } from './pages/portfolio/flfc/flfc.component';
import { RoverComponent } from './pages/portfolio/rover/rover.component';
import { CwebserverComponent } from './pages/portfolio/cwebserver/cwebserver.component';
import { TurtlecoreComponent } from './pages/portfolio/turtlecore/turtlecore.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    CvComponent,
    ProjectComponent,
    FlfcComponent,
    RoverComponent,
    CwebserverComponent,
    TurtlecoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
