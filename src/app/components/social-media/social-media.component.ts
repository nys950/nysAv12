import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }

  btnFacebook () {
   window.open('https://www.facebook.com/profile.php?id=100082006130733');
  }

  btnInstagram () {
    window.open('https://www.instagram.com/nyssolucionesintegrales/');
  }

  btnLinkeing () {
    window.open('https://www.linkedin.com/company/nys-soluciones-integrales/');
  }

  ngOnInit(): void {
  }

}
