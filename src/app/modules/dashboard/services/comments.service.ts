import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { GRATITUDE_LIST } from '../models/dashboard.constants';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  getComments() {
    return of(GRATITUDE_LIST);
  }
}
