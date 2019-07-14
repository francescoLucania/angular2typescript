import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: '[app-popular-list]',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.scss']
})

export class PopularListComponent implements OnInit {
  previewList;

  @Input() userRequest;

  constructor (private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getVideo().subscribe((data)=>{
      console.log(data['videos']);
      this.previewList = data['videos'];

      console.log(this.previewList);

      console.log(this.userRequest)

    });
  }
}
