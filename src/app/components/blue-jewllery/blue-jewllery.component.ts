import { Component } from '@angular/core';
import { Load } from 'src/app/services/Load';
import { LoadContentService } from 'src/app/services/load-content.service';

@Component({
  selector: 'app-blue-jewllery',
  templateUrl: './blue-jewllery.component.html',
  styleUrls: ['./blue-jewllery.component.scss']
})
export class BlueJewlleryComponent {
  data: Load = {
    title: '',
    phonenumber:'',
    email:'',
    about: [],
    carousal: [],
    products: []
  };

  constructor(private imageService: LoadContentService) {}

  ngOnInit() {
    this.imageService.getAllContent("bluejewllery").subscribe(response => {
      this.data = response;
    });
  }
}
