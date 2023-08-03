import { Component, OnInit } from '@angular/core';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-enlistar-motos',
  templateUrl: './enlistar-motos.component.html',
  styleUrls: ['./enlistar-motos.component.css']
})
export class EnlistarMotosComponent implements OnInit {

  motos:any = [];

  constructor(private motoService:MotoService){
    this.getMotos()
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getMotos(){
    this.motoService.getMotos().subscribe((data => {
      this.motos = data;
    }))
  }

  eliminarMoto(moto,index) {
    if(window.confirm('¿Estas seguro de que lo deseas eliminar?')){
      this.motoService.deleteMoto(moto._id)
        .subscribe((data)=>{
          this.motos.splice(index,1);
        })
    }
  }



}
