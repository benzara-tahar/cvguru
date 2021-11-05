import { Component, OnInit } from '@angular/core';

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
  function: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      rating: 5,
      text: 'Undoubtedly, CVmaker was a great success for me. Within 15 minutes, I had created my resume and sent it with the email program.',
      date: '12/12/2019',
      function: 'CEO',
    },
    {
      name: 'Rami Bonavert',
      rating: 4,
      text: 'I received positive comments on my resume and found a great job very quickly. I certainly recommend CVmaker!',
      date: '12/12/2019',
      function: 'HR Manager',
    },
    {
      name: 'Kate',
      rating: 5,
      text: 'I find it very handy that I can organise all of my resumes and applications in one place with CVmaker. It holds such beautiful resume templates!',
      date: '12/12/2019',
      function: 'Marketing',
    },
  ];

  constructor() {}

  range(n: number) {
    return Array(n);
  }

  ngOnInit(): void {}
}
