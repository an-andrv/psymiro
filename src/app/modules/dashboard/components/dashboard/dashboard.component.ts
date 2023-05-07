import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from '../../models/dasnboard.models';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  list$: Observable<Img[]>;

  @Input() pageLikes = 0;
  @Output() changeLike = new EventEmitter();

  constructor(private commentsService: CommentsService) {
    this.list$ = this.commentsService.getComments();
  }

  increment(): void {
    this.pageLikes++;
    this.changeLike.emit(this.pageLikes);
  }

  decrement(): void {
    this.pageLikes--;
    this.changeLike.emit(this.pageLikes);
  }

}
