import { Injectable } from '@angular/core';
// import { DEFAULT_LANGUAGE, SITE_LANGUAGES } from '@shared/models/translate.models';
import { DEFAULT_LANGUAGE, SITE_LANGUAGES } from '../../models/translate.models';


@Injectable({
  providedIn: 'root',
})
export class TranslateService {

  get() {
    return SITE_LANGUAGES.find(lang => lang.code === DEFAULT_LANGUAGE);
  }
}
