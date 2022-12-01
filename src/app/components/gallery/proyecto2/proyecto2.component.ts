import { Component, OnInit } from '@angular/core';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-proyecto2',
  templateUrl: './proyecto2.component.html',
  styleUrls: ['./proyecto2.component.css']
})
export class Proyecto2Component {

  public _albumsone: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 4; i++) {
      const src = 'assets/proyectos/two/img' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/proyectos/two/img' + i + '.jpg';
      const albumone = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this._albumsone.push(albumone);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albumsone, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
