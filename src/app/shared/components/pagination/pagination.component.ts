import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalPages: number;
  @Input() currentPage: number;
  @Output() selectPageEvent = new EventEmitter<number>();

  public pages: number[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.calculatePages();
  }

  public calculatePages(): void {
    if (this.currentPage === 1 || this.currentPage === 2) {
      this.pages = [1, 2, 3, 4, 5];
    }

    if (this.currentPage > 3) {
      this.pages = [
        this.currentPage - 2,
        this.currentPage - 1,
        this.currentPage,
        this.currentPage + 1,
        this.currentPage + 2,
      ];
    }

    if (this.currentPage === this.totalPages - 1 || this.currentPage === this.totalPages) {
      this.pages = [
        this.currentPage - 4,
        this.currentPage - 3,
        this.currentPage - 2,
        this.currentPage - 1,
        this.currentPage,
      ];
    }
  }

  public selectPage(pageNumber: number): void {
    if (this.currentPage !== pageNumber) {
      this.currentPage = pageNumber;
      this.calculatePages();
      this.selectPageEvent.emit(pageNumber);
    }
  }

  public prevPage(): void {
    this.currentPage = this.currentPage - 1;
    this.calculatePages();
    this.selectPageEvent.emit(this.currentPage);
  }

  public nextPage(): void {
    this.currentPage = this.currentPage + 1;
    this.calculatePages();
    this.selectPageEvent.emit(this.currentPage);
  }
}
