import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts=[
{
  title:'Neat Tree',
  imageUrl:'assets/tree.jpg',
  username:'@nature',
  content:'I saw this neat today!!'
},
{
title:'Snowy mountain',
imageUrl:'assets/mountain.jpg',
username:'@mountainlover',
content:'Here is a picture of a snowy mountain.'
},
{
title:'Mountain biking',
imageUrl:'assets/biking.jpg',
username:'@mauntainbiking',
content:'I did some biking today'
}
]
}
