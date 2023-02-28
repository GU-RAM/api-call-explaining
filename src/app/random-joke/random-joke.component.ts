import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';
import { Joke, Permission } from '../chuck.model';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss'],
})
export class RandomJokeComponent {
  joke$: Observable<Joke> = this.api.getRandomJoke();

  persmission: Permission | undefined;

  constructor(
    private api: ChuckApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.persmission = this.activatedRoute.snapshot.data['permissions'];
    console.log(this.activatedRoute.snapshot.data['permissions']);
  }
}
