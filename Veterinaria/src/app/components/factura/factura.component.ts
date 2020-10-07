import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { VirtualTimeScheduler } from 'rxjs';

import { ClientesService } from '../../services/clientes.service';
import { Clientes } from '../../models/clientes';
import { FacturacionService } from '../../services/facturacion.service';
import { Factura } from '../../models/factura';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  title = 'parcial1';
  productList: Clientes[];
  facturaList: Factura[];
  // servicio:string;
  nombre:string;
  dui:string;
  mascota:string;
  tratamiento:string;
  medicamento:string;
  costo:number;
  costoDescuento:number;
  
  visitas:number=0;

  consulta:any;
  mensaje:string;
  mensaje2:string;

    

  constructor(
    public facturacionService: FacturacionService, 
    public toastr: ToastrService,
    public clientesService: ClientesService
  ){}

  VisitasCliente(){
    this.ListarClientes();
    for (const item of this.productList) {
      if (item.category==this.dui) {
        item.price = item.price + 1;
        this.visitas=item.price;
        this.clientesService.updateVisita(item.$key,item.price);
      } 
    }
    if(this.visitas!=0)
    this.mensaje = `El cliente tiene ${this.visitas} visitas.`;
    else this.mensaje =`No se encuentra en los registros.`;
  }

  CalcularDescuento(valor:number){
    let descuento:number;
    if (this.visitas==2) {
      descuento = valor*0.05;
      this.costoDescuento = this.round ((valor-descuento),2);;
      this.mensaje2 = `Costo Total: ${this.costoDescuento} (5% descuento)`;
    }
    else if (this.visitas>5) {
      descuento = valor*0.08;
      this.costoDescuento = this.round ((valor-descuento),2);
      this.mensaje2 = `Costo Total: ${this.costoDescuento} (8% descuento)`;
    }
    else {this.costoDescuento = valor;
      this.mensaje2 = `Costo Total: ${this.costoDescuento} (0% descuento)`;
    }

  } 

  ngOnInit(){
    return this.facturacionService.getdatos()
      .snapshotChanges().subscribe(item => {
        this.facturaList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.facturaList.push(x as Factura);
        });
      });
      
    this.resetForm();

    this.mensaje = '';
    this.mensaje2 = '';

    
  }

  ListarClientes(){
    return this.clientesService.getProducts()
    .snapshotChanges().subscribe(item => {
      this.productList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.productList.push(x as Clientes);
      });
    });

  }
  
  round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }

  onSubmit() {
      this.facturacionService.insertdatos(this.nombre,this.mascota,this.dui,this.costo,this.costoDescuento,this.medicamento,this.tratamiento);
    this.resetForm();
    this.toastr.success('Factura Realizada', 'Ticket Guardado');
  }

  resetForm() {
    this.nombre ='';
    this.dui = '';
    this.mascota = '';
    this.tratamiento= '';
    this.medicamento='';
    this.costo = 0;
    this.mensaje = '';
    this.mensaje2 = '';
  }

}



