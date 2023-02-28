import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { delay, finalize, Observable, of } from 'rxjs';
import { loadingService } from 'src/app/shared/loading.service';
import { ChuckApiService } from './chuck-api.service';
import { Permission } from './chuck.model';

@Injectable({ providedIn: 'root' })
export class PersmissionResolver implements Resolve<Permission> {
  constructor(
    private apiService: ChuckApiService,
    private loadingService: loadingService
  ) {}

  service: any;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Permission> | Promise<Permission> | Permission {
    this.loadingService.start();
    return this.apiService
      .getPermission()
      .pipe(finalize(() => this.loadingService.stop()));
  }
}
