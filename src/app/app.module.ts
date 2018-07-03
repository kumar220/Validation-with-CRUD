import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {appRoutes} from './routerConfig';
import {IndexComponent} from './index/index.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
