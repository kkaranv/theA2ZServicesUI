import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsListComponent } from './core/accounts-list/accounts-list.component';
import { EntitiesListComponent } from './core/entities-list/entities-list.component';
import { EntityComponent } from './core/entity/entity.component';
import { AccountComponent } from './core/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
    EntitiesListComponent,
    EntityComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
