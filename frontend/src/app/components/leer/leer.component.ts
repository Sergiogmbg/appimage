import { Component, OnInit } from '@angular/core';
import { MimodeloService } from 'src/app/services/mimodelo.service';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit {

  private listaUsuarios: MimodeloService;

  constructor(private mimodeloService: MimodeloService) { }

  ngOnInit() {
    this.mimodeloService.getUsuarios().subscribe(
      res => {
        console.log(res);
        this.listaUsuarios = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
