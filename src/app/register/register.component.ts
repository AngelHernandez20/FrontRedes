import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
// import {ServiceService} from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm= new FormGroup({
    NombreU: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    
  })
  constructor(private router: Router) { }
  // private authSvc:ServiceService,
  ngOnInit(): void {
  }
  
  
}
