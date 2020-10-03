import { Injectable } from '@angular/core';
// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

// Model
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {
// Traer los datos de firebase
productList: AngularFireList<any>;
// Una variable temporal, para guardar los datos seleccionados, del tipo Product
selectedProduct: Clientes = new Clientes();
  constructor(private firebase: AngularFireDatabase) { }
  // Traer todos los productos desde firebase 
  getProducts() { // guarda los elementos en la varible 'products'
    return this.productList = this.firebase.list('clientes');
  }

  // crear un nuevo producto  , recibiendo un parametro de tipo Product
  insertProduct(clientes: Clientes) {
    // agregar un dato al final de la lista, como recibe un objeto del tipo Product , puede acceder a sus propiedades
    this.productList.push({
      name: clientes.name,
      category: clientes.category,
      location: clientes.location,
      price: clientes.price
    });
  }

  // Actualiza un producto, recibiendo un parametro de tipo Product
  updateProduct(clientes: Clientes) {
    // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
    this.productList.update(clientes.$key, {
      name: clientes.name,
      category: clientes.category,
      location: clientes.location,
      price: clientes.price
    });
  }

  // Elimina un producto, recibiendo como parametro la clave , utilizando el metodo remove de firebase
  deleteProduct($key: string) {
    this.productList.remove($key);
  }
}
