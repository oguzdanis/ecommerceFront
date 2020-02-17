import { Component, OnInit } from '@angular/core';
import {Category} from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategori listesi";
  categories : Category[] = [
    {
      id: 1,
      name: "Smart Phone"
    },
    {
      id: 2,
      name: "NoteBook"
    }
  ];

  ngOnInit(): void {
  }

}
