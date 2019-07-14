import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title_1 = 'Popular';

  title_2 = 'New';

  titleClass = 'home__title';
  titleClassActive = 'home__title home__title--is-active';

  userRequest = '';

  popularList = "popular list";

  constructor() { }

  ngOnInit() {

  }

  changeHomeFormSearch(userRequest) {

    if (userRequest != '' && userRequest.length > 2) {
      this.userRequest = 'По завпросу "' + userRequest + '" найдены сдудующие результаты:';

      this.popularList = userRequest;

    } else {
      this.userRequest = '';
      this.popularList = "popular list";
    }
  }
}
