import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';


@Component({
  selector: 'app-editar-moto',
  templateUrl: './editar-moto.component.html',
  styleUrls: ['./editar-moto.component.css']
})
export class EditarMotoComponent implements OnInit{

  editarForm: FormGroup;
  enviado = false;
  motoMarca : any = [
    'Harley', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'BMW'
  ];
  motoData: Moto[]

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private MotoService: MotoService
  ){}

  ngOnInit(): void {
    this.mainForm();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getMoto(id)

    this.editarForm = this.formBuilder.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      anio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      precio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      imagen: ['', [Validators.required]]
    })

  }

  mainForm(){
    this.editarForm = this.formBuilder.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      anio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      precio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      imagen: ['', [Validators.required]]
    })
  }

  actualizarMarca(d){
    this.editarForm.get('marca').setValue(d,{
      onlySelf: true,

    });
  }

  //Getter para acceder a los controles del formulario
  get myForm(){
    return this.editarForm.controls;
  }

  getMoto(id){
    this.MotoService.getMoto(id).subscribe((data) => {
      this.editarForm.setValue({
        marca: data['marca'],
        modelo: data['modelo'],
        anio: data['anio'],
        precio: data['precio'],
        imagen: data['imagen']
      });
    })
  }

  onSubmit(){
    this.enviado = true;
    if(!this.editarForm.valid){
      return false;
    } else {
      if(window.confirm('¿Estás seguro que lo deseas editar esta Moto?')){
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.MotoService.updateMoto(id, this.editarForm.value)
          .subscribe({
            complete: () => {
              this.router.navigateByUrl('/listar-motos');
              console.log('Se actualizo correctamente')
            },
            error: (e) => {
              console.log(e);
            }
          })
      }
    }
  }



}
