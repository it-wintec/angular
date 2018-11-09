import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

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

    let params = new HttpParams();
    params = params.append('type', 'HERO_READ');

    this.http.post(this.RESTUrl, params)
      .subscribe(res => {
        console.log(res);
        if ('heroes' in res) {
          this.heroes = res['heroes'];
        }
      });
  }

  edit(obj) {
    this.curhero = obj;
    this.isEdit = !this.isEdit;
  }

  delete(obj) {
    this.isEdit = false;

    let params = new HttpParams();
    params = params.append('type', 'HERO_DELETE');
    params = params.append('id', obj.id);
    this.http.post(this.RESTUrl, params)
      .subscribe(res => {
        console.log(res);
        this.getData();
      }, error => {
        console.log(error);
      });
  }

  save() {
    this.isEdit = false;
    let id = 1;
    let heroes = this.heroes;
    let name = this.name;
    heroes.forEach(function(item, key) {
      if (item.id >= id) {
        id = item.id + 1;
      }
    });
    let params = new HttpParams();
    params = params.append('type', 'HERO_CREATE');
    params = params.append('id', id.toString());
    params = params.append('name', name);
    this.http.post(this.RESTUrl, params)
      .subscribe(res => {
        console.log(res);
        this.getData();
      }, error => {
        console.log(error);
      });
  }

  update(){
    let params = new HttpParams();
    params = params.append('type', 'HERO_UPDATE');
    params = params.append('id', this.curhero.id.toString());
    params = params.append('name', this.curhero.name);
    this.http.post(this.RESTUrl, params)
      .subscribe(res => {
        console.log(res);
        this.getData();
        this.isEdit = false;
      }, error => {
        console.log(error);
      });
  }

}
