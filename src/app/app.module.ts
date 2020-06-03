import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { BackgroundComponent } from './background/background.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImageSwitcherComponent } from './image-switcher/image-switcher.component';
import { RomanPipe } from './roman.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewerComponent,
    BackgroundComponent,
    ImageDetailsComponent,
    ImageSwitcherComponent,
    RomanPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
