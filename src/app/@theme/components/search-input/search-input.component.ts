import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-search-input',
  styleUrls: ['./search-input.component.scss'],
  template: `
    <div class="input-group">
      <input type="text" class="form-control" (keyup.enter)="onSearch(searchString)"
             [(ngModel)]="searchString" placeholder="Search for a book...">
      <span class="input-group-btn">
            <button class="btn btn-info" (click)="onSearch(searchString)">
             <i class="fa fa-search"></i>
            </button>
          </span>
    </div>
  `,
})
export class SearchInputComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  isInputShown = false;
  searchString;

  hideInput() {
    this.isInputShown = false;
  }

  onSearch(val: string) {
    this.search.emit(val);
  }
}
