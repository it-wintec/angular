import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  private RESTUrl = '/api/angluar';
  curhero = { id: 0, name: '' };
  isEdit = false;
  name = '';
  heroes = [
    { id: 1, name: 'Yang' },
    { id: 2, name: 'Jack' },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.http.post(this.RESTUrl, null)
      .subscribe(res => {
        console.log(res);
        if ('heroes' in res) {
          this.heroes = res['heroes'];
        }
      });
  }

  edit(obj) {
    this.curhero = obj;
    this.isEdit = true;
  }

  delete(obj) {
    let heroes = this.heroes;
    heroes.forEach(function(item, key) {
      console.log(item);
      if (item.id == obj.id) {
        heroes.splice(key, 1);
      }
    });
    this.isEdit = false;
  }

  save() {
    let id = 1;
    let heroes = this.heroes;
    let name = this.name;
    heroes.forEach(function(item, key) {
      if (item.id >= id) {
        id = item.id + 1;
      }
    });
    heroes.push({ id: id, name: name });
    this.isEdit = false;
  }

}
