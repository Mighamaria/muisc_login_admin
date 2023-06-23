import { Component } from '@angular/core';

interface Song {
  imageUrl: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  showFormFlag = false;
  title: string = '';
  description: string = '';

  newReleasedSongs: Song[] = [
    {
      imageUrl: 'assets/slideshow/9.png'
    },
    {
      imageUrl: 'assets/slideshow/11.png'
    },
    {
      imageUrl: 'assets/slideshow/10.png'
    },
    {
      imageUrl: 'assets/slideshow/12.png'
    },
    {
      imageUrl: 'assets/slideshow/13.png'
    },
    {
      imageUrl: 'assets/slideshow/14.png'
    },
  ];


  newReleasedSongs1: Song[] = [
    {
      imageUrl: 'assets/slideshow/12.png'
    },
    {
      imageUrl: 'assets/slideshow/14.png'
    },
    {
      imageUrl: 'assets/slideshow/10.png'
    },
    {
      imageUrl: 'assets/slideshow/11.png'
    },
    {
      imageUrl: 'assets/slideshow/8.png'
    },
    {
      imageUrl: 'assets/slideshow/9.png'
    },
  ];


  newReleasedSongs2: Song[] = [
    {
      imageUrl: 'assets/slideshow/8.png'
    },
    {
      imageUrl: 'assets/slideshow/14.png'
    },
    {
      imageUrl: 'assets/slideshow/10.png'
    },
    {
      imageUrl: 'assets/slideshow/9.png'
    },
    {
      imageUrl: 'assets/slideshow/12.png'
    },
    {
      imageUrl: 'assets/slideshow/13.png'
    },
  ];


  slideIndex = 0;
  carouselInterval: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  goToSlide(index: number) {
    this.slideIndex = index;
    clearInterval(this.carouselInterval);
    this.startCarousel();
  }

  previousSlide() {
    this.slideIndex = this.slideIndex === 0 ? this.newReleasedSongs.length - 1 : this.slideIndex - 1;
    clearInterval(this.carouselInterval);
    this.startCarousel();
  }

  nextSlide() {
    this.slideIndex = this.slideIndex === this.newReleasedSongs.length - 1 ? 0 : this.slideIndex + 1;
    clearInterval(this.carouselInterval);
    this.startCarousel();
  }

  showForm() {
    this.showFormFlag = true;
  }

  submitForm() {
    // Perform form validation if needed
    // ...

    // Handle form submission
    // You can send the form data to an API or perform any other actions here
    console.log('Title:', this.title);
    console.log('Description:', this.description);

    // Reset form fields
    this.title = '';
    this.description = '';
  }
  
}
