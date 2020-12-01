import { ServiceService } from './../service.service';
import { ConexionLibroService } from './../conexion-libro.service';
import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public listServ : ConexionLibroService,
    private service: ServiceService,
    private location: Location 
  ) { }

  ngOnInit(): void {
  }

  onSaveBook(bookForm: NgForm):void{
    console.log('UPDATE Alumno');
    this.listServ.updateBook(bookForm.value).subscribe(book => location.reload());
  }

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
