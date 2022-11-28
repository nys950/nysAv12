import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calltoactions',
  templateUrl: './calltoactions.component.html',
  styleUrls: ['./calltoactions.component.css']
})
export class CalltoactionsComponent implements OnInit {

  constructor() { }

  inputText: string = '';
  alertTextoVacio: string = '';
  alertFormatoIncorrecto: string = '';

  ngOnInit(): void {
  }

  btnEnviarCorreo(){
    if (this.inputText != ''){
      if (this.esEmailValido(this.inputText) === true){
        this.alertFormatoIncorrecto= 'false';
        location.href = "mailto:suscripciones@solucionesintegralesnys.com?subject=Activar suscripcion para "+this.inputText+"";
      }else {
        this.alertTextoVacio = 'false';
        this.alertFormatoIncorrecto = 'true';
      }
    } else {
      this.alertTextoVacio = 'true';
      this.alertFormatoIncorrecto = 'false';
    }
  }

  esEmailValido(email: string):boolean {
    let mailValido = false;
    'use strict';

    var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(EMAIL_REGEX)){
      mailValido = true;
    }
    return mailValido;
  }

}
