import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';
import { Joke } from '../chuck.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent {
  joke$: Observable<Joke | null> | undefined;

  constructor(
    public activatedRoute: ActivatedRoute,
    private apiService: ChuckApiService,
    private toastr: ToastrService
  ) {}

  addToList(joke: Joke) {
    this.apiService
      .saveJoke(joke)
      .subscribe(() => this.toastr.success('Joke has been added '));
  }

  ngOnInit(): void {
    const category = this.activatedRoute.snapshot.paramMap.get('category');

    if (category) {
      this.joke$ = this.apiService.getCategoryJoke(category).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.toastr.error('Not Found Error');
          }
          return of(null);
        })
      );
    }
  }
}
