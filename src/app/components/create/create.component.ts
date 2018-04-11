import { Component, OnInit } from '@angular/core';
import { PdpService } from '../../pdp.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  pdpForm: FormGroup;
  constructor(private pdpServide : PdpService, private fb : FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.pdpForm = this.fb.group({
      kapital: ['', Validators.required],
      honorarium: ['', Validators.required]
    });
  }

  addPdp(kapital, honorarium){
    this.pdpServide.addPdp(kapital, honorarium);
  }

  title = 'Bienvenido a pdp';

  ngOnInit() {
  }

}
