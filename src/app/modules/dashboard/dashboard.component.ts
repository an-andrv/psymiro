import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Img } from 'src/app/shared/interfaces/dasnboard.interfaces';
import { GRATITUDE_LIST } from 'src/app/shared/models/dashboard.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  list$: Observable<Img[]> = of(GRATITUDE_LIST);
}
