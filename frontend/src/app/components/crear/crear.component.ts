import { Component, OnInit } from '@angular/core';
import { MimodeloService } from 'src/app/services/mimodelo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public formUser: FormGroup;
  public misUsuarios: MimodeloService;

  constructor(private formBuilder: FormBuilder, private service: MimodeloService) {
    this.formUser = formBuilder.group({
      nombre: [],
      foto: []
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.misUsuarios);
    this.service.saveUsuario(this.formUser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
