import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import mapboxgl, {Map} from 'mapbox-gl'


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElelement!: ElementRef;
  constructor() { }

  ngAfterViewInit() {
    this.cargarMapa()
  }

  cargarMapa(){
    const map = new Map({
      container: this.mapDivElelement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.7719737, 3.9882829],
      zoom: 13,
      cooperativeGestures: true
    });
    map.addControl(new mapboxgl.NavigationControl());
    const marker1 = new mapboxgl.Marker()
      .setLngLat([-73.7714265, 3.9882776])
      .addTo(map);
  }

}
