import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  @Input() description = "You’re either misspelling the URL or requesting a page that's no longer here.";

  constructor() {}

  ngOnInit(): void {}
}
