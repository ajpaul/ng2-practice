import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//components - move to barrel or index file later
import { AppComponent } from './app.component';
import { TimeTileComponent } from './time-tile/time-tile.component';
import { HomeComponent } from './home/home.component';

//shared resources can be moved into an index file 
import { CityService } from './shared/city.service';

@NgModule({
  declarations: [
    AppComponent,
    TimeTileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'tiles',
        component: TimeTileComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [ CityService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
