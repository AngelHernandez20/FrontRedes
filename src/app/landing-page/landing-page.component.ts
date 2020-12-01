import { ConexionLibroService } from './../conexion-libro.service';
import { ServiceService } from './../service.service';
import { AppRoutingModule } from './../app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { Libro } from './../Model/Libro';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  llenado = {
    id:null,
    name:'',
    mark:'',
    tipo:'',
    quantity:null,
    price:null ,  
    year:'',
    image:' ',
  }
  SelectedAlumno: Libro;
  
  book : Libro[];

  constructor(private listServ : ConexionLibroService, private router: Router, private service: ServiceService) {}


  ngOnInit(): void {
    this.listServ.getAllBooks().subscribe( data => (this.book=data));
    
  }

  render(): void {
    this.listServ.getAllBooks().subscribe( data => (this.book=data));
  }

  agregarAlum(){
    this.listServ.addNuevoBook(this.llenado).subscribe(data => console.log(data));
    this.llenado ={
      id: null,
      name: '',
      tipo:'',
      mark:'',
      quantity:" ",
      price: " ",
      year: '',
      image: ' ',
    };
    alert("Alumno Agregado")
    window.location.reload();    
  }
// -------------------------------------------------------------
  delete(book:Libro):void{
    console.log(book);
     this.listServ.deleteBook(book)
     .subscribe(data=>{
      //  this.alumns=this.alumns.filter(a=>a!==alumns);
      
        window.location.reload(); 
     })
  }

  // --------------------------------------------------------------------
  
  cargarDatos(book:Libro):void{
    this.listServ.selectedBook = Object.assign({},book);    
   }
  //--------------------------------------------------------------------------
  
    public imagePath;
    imgURL: any;
    public message: string;
   
    preview(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }
}

