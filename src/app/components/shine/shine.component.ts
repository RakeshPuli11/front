import { Component } from '@angular/core';
import { Load } from 'src/app/services/Load';
import { LoadContentService } from 'src/app/services/load-content.service';

@Component({
  selector: 'app-shine',
  templateUrl: './shine.component.html',
  styleUrls: ['./shine.component.scss']
})
export class ShineComponent {
  data: Load = {
    title: '',
    phonenumber:'',
    email:'',
    about: [],
    carousal: [],
    products: []
  };
  productsDisplay: String[] = [];
  constructor(private imageService: LoadContentService) {}

  ngOnInit() {
    this.imageService.getAllContent("shine").subscribe(response => {
      this.data = response;
    });
  }
}
