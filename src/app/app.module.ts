import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './menu/about/about.component';
import { BlogComponent } from './menu/blog/blog.component';
import { ContactoComponent } from './menu/contacto/contacto.component';
import { PortafolioComponent } from './menu/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactoComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
