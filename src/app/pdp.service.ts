import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class PdpService {

  constructor(private http : HttpClient) { }

  addPdp(kapital, honorarium){
    const url = 'http://localhost:4200/pdp/add';
    const obj = { 
      kapital : kapital,
      honorarium : honorarium
    };
    this.http.post(url, obj)
      .subscribe(res => console.log('Done'));
  }

}
