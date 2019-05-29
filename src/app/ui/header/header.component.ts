import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
menu=[{
name:"Home",
imgUrl:"",
  count: 7,
id:1
},
  {
    name: "Upcoming Events",
    imgUrl: "calender",
    count:5,
    id:2
  }, 
  {
    name: "Past Events",
    imgUrl: "",
    count: 10,
    id:3
  },
  {
    name: "Destinations",
    imgUrl: "",
    count: 11,
    id:4
  },
  {
    name: "Experience",
    imgUrl: "",
    count: 4,
    id:5
  },
  {
    name: "Contact Us",
    imgUrl: "",
    count: 3,
    id:6
  },
];
  ngOnInit() {

    
  }

}
