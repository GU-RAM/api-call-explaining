import { Component } from '@angular/core';
import { loadingService } from 'src/app/shared/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'api-exercise';

  get loading$() {
    return this.loadingService.loading$;
  }

  constructor(private loadingService: loadingService) {}
}
