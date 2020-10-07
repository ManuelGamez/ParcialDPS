import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Factura } from 'src/app/models/factura';
import {FacturacionService} from '../../services/facturacion.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  facturaList: Factura[];
  busqueda:string;

  constructor( public toastr: ToastrService,   public facturacionService: FacturacionService) { }

  ngOnInit() {
    return this.facturacionService.getdatos()
    .snapshotChanges().subscribe(item => {
      this.facturaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.facturaList.push(x as Factura);
      });
    });
  }

  Buscar(){
    this.facturaList = this.facturaList.filter(data =>{
    return  data.dui.toString().trim()==this.busqueda;
    })

    if(this.facturaList.length==0){
      this.facturacionService.getdatos()
    .snapshotChanges().subscribe(item => {
      this.facturaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.facturaList.push(x as Factura);
      });
    });
      this.toastr.info('Dato No Encontrado', 'Consulta Realizada');
      this.busqueda='';
    }
    else{
      this.toastr.success('Dato Encontrado', 'Consulta Realizada');
    }
  }

  Seleccion(factura:Factura) {
    this.facturacionService.selectedProduct = Object.assign({}, factura);
  }

}
