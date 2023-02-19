import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';
import { Joke } from '../chuck.model';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss'],
})
export class JokeListComponent {
  jokesList$ = this.apiService.getJokeList();

  selectedJokeId: string | undefined;

  @ViewChild('input') input: ElementRef | undefined;

  constructor(
    private apiService: ChuckApiService,
    private toastr: ToastrService
  ) {}

  deleteJoke(id: string) {
    return this.apiService.deleteJoke(id).subscribe(() => {
      this.toastr.success('deleted succesfully'),
        (this.jokesList$ = this.apiService.getJokeList());
    });
  }

  edit(id: string) {
    this.selectedJokeId = id;
  }

  cancelEdit() {
    this.selectedJokeId = undefined;
  }

  saveEdit(id: string, joke: Joke) {
    const value = this.input?.nativeElement.value;
    return this.apiService
      .editJoke(id, {
        ...joke, //აქ ვეუბნებით joke-ში რა პროპერტებიცაა დატოვე იგივენაირად, მაგრამ value-ს მნიშვნელობა გადააწერე
        value,
      })
      .subscribe(() => {
        this.toastr.success('edited succesfully'), this.cancelEdit();
        this.jokesList$ = this.apiService.getJokeList();
      });
  }

  ngOnInit(): void {}
}
