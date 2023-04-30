import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from '../../models/dasnboard.models';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  list$: Observable<Img[]>;

  constructor(private commentsService: CommentsService) {
    this.list$ = this.commentsService.getComments();
  }

}
