import {Injectable} from '@angular/core';
import {AdItem} from '../model/ad-item.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AdService {
  private adSubject = new BehaviorSubject<AdItem>(new AdItem(null, null, null, null));
  public currentAd$ = this.adSubject.asObservable();

  constructor (
  ) {}

  setAd(ad: AdItem) {
    this.adSubject.next(ad);
  }
}
