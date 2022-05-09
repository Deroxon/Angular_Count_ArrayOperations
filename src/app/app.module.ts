import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './components/first.component';
import { SecondComponent } from './components/second.component';
import { ThirdComponent } from './components/third.component';
import { Service } from './service';
import { RandColorDirective } from './shared/direcCheck';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    RandColorDirective,
  ],
  providers: [Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
