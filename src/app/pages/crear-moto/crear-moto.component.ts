import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-crear-moto',
  templateUrl: './crear-moto.component.html',
  styleUrls: ['./crear-moto.component.css']
})
export class CrearMotoComponent {

  motoForm: FormGroup;
  enviado = false;
  motoMarca : any = [
    'Harley', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'BMW'
  ];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private motoService: MotoService

  ){
    this.mainForm();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  mainForm(){
    this.motoForm = this.formBuilder.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      anio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      precio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      imagen: ['', [Validators.required]]
    })
  }

  actualizarMarca(d){
    this.motoForm.get('marca').setValue(d,{
      onlySelf: true,

    });
  }

  //Getter para acceder a los controles del formulario
  get myForm(){
    return this.motoForm.controls;
  }

  onSubmit(){
    this.enviado = true;
    if(!this.motoForm.valid){
      return false;
    } else {
      return this.motoService.agregarMotos(this.motoForm.value)
        .subscribe({
          complete: () => {
            console.log('Moto agregada correctamente'),
            this.ngZone.run(() => this.router.navigateByUrl('/listar-motos'));
          },
          error: (e) => {
            console.log(e)
          },
        });
    }
  }

}


