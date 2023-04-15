import { Component } from '@angular/core';

@Component({
  selector: 'app-easter-ngfor',
  templateUrl: './easter-ngfor.component.html',
  styleUrls: ['./easter-ngfor.component.css']
})
export class EasterNgforComponent {

  title = "Movies";
  movies:Movie[] = [
    {title: "The Godfather",director: "Francis Ford Coppola",year: 1972,genre: "Crime",rating: 9.2},
    {title: "The Shawshank Redemption",director: "Frank Darabont",year: 1994,genre: "Drama",rating: 9.3},
    {title: "The Dark Knight",director: "Christopher Nolan",year: 2008,genre: "Action",rating: 9.0},
    {title: "The Lord of the Rings: The Fellowship of the Ring",director: "Peter Jackson",year: 2001,genre: "Adventure",rating: 8.8},
    {title: "Forrest Gump",director: "Robert Zemeckis",year: 1994,genre: "Drama",rating: 8.8},
    {title: "Inception",director: "Christopher Nolan",year: 2010,genre: "Sci-Fi",rating: 8.8},
    {title: "Pulp Fiction",director: "Quentin Tarantino",year: 1994,genre: "Crime",rating: 8.9}
  ];

}

class Movie {
  title!:string;
  director!:string;
  year!:number;
  genre!:string;
  rating!:any;
}