import { Component, HostListener } from '@angular/core';
import { Load, Products } from 'src/app/services/Load';
import { LoadContentService } from 'src/app/services/load-content.service';

@Component({
  selector: 'app-glory',
  templateUrl: './glory.component.html',
  styleUrls: ['./glory.component.scss']
})
export class GloryComponent {
  isNavbarExpanded: boolean = false;
  isScrolledDown: boolean = false;
  backgroundImageUrl: string = ''; // Declare the property here

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    if (offset > 0) {
      this.isScrolledDown = true;
      this.isNavbarExpanded = true;
    } else {
      this.isScrolledDown = false;
      this.isNavbarExpanded = false;
    }
  }

  data: Load = {
    title: '',
    phonenumber: '',
    email: '',
    about: [],
    carousal: [],
    products: []
  };
  productsArray: string[] = [];

  constructor(private imageService: LoadContentService) {}

  ngOnInit() {
    this.imageService.getAllContent("glory").subscribe(response => {
      this.data = response;
      this.productsArray = this.data.products.map((product: Products) => product.product.toString());      if (this.data.carousal && this.data.carousal.length > 0) {
        this.backgroundImageUrl = this.data.carousal[0];
      }
    });
  }
}