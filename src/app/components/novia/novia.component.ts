import { Component } from '@angular/core';
import { Load } from 'src/app/services/Load';
import { LoadContentService } from 'src/app/services/load-content.service';

@Component({
  selector: 'app-novia',
  templateUrl: './novia.component.html',
  styleUrls: ['./novia.component.scss']
})
export class NoviaComponent {
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
    this.imageService.getAllContent("novia").subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }
}
