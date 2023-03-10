import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { CategoriesComponent } from './categories/categories.component';
import { JokeComponent } from './joke/joke.component';
import { ContainerComponent } from './container/container.component';
import { AppRoutingModule } from './api-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { API_BASE } from './token';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JokeListComponent } from './joke-list/joke-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomJokeComponent,
    CategoriesComponent,
    JokeComponent,
    ContainerComponent,
    SearchComponent,
    JokeListComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: API_BASE,
      useValue: environment.apiBase,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
