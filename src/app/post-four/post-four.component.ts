import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-post-four',
  templateUrl: './post-four.component.html',
  styleUrls: ['./post-four.component.css']
})
export class PostFourComponent {
  showButton: boolean = false;

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    const maxScroll = bodyHeight - windowSize - 300; // Agrega un margen de 100px
  
    if (scrollPosition >= 3000 && scrollPosition < maxScroll) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
