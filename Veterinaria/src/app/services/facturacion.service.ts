import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  productList: AngularFireList<any>;

  selectedProduct: Factura = new Factura();

  constructor(private firebase: AngularFireDatabase) {}
 

    getdatos() { 
    return this.productList = this.firebase.list('factura');
   }
   insertdatos(Nombre:string,Mascota:string,DUI:string,Costo:number,CostoDescuento,Medicamento:string,Tratamiento:string) {
    // agregar un dato al final de la lista, como recibe un objeto del tipo Product , puede acceder a sus propiedades
    this.productList.push({
      nombre: Nombre,
      dui: DUI,
      costo: Costo,
      //servicio: factura.servicio,
      costoDescuento: CostoDescuento,
      medicamento: Medicamento,
      mascota: Mascota,
      tratamiento: Tratamiento
       });
  }






}
