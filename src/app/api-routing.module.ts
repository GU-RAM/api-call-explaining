import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymGuard } from './anonym.guard';
import { AuthGuard } from './auth.guard';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';
import { LoginComponent } from './login/login.component';
import { PersmissionResolver } from './permission.resolver';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { SearchGuard } from './search.guard';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymGuard],
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'random',
        component: RandomJokeComponent,
        resolve: {
          permissions: PersmissionResolver,
        },
      },
      {
        path: 'category/:category',
        component: JokeComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
        canDeactivate: [SearchGuard],
      },
      {
        path: 'list',
        component: JokeListComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
