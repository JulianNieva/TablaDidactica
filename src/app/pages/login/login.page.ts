import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email :FormControl
  clave :FormControl
  isLoading:boolean = false

  usuariosHardcode = [
    {email: 'admin@admin.com', password:'111111'},
    {email: 'invitado@invitado.com', password:'222222'},
    {email: 'usuario@usuario.com', password:'333333'}
  ]

  constructor(private userService:UserService,private navCtrl:NavController) 
  { 
    this.email = new FormControl('',[
      Validators.required,
      Validators.email
    ])
    this.clave = new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ])
  }

  ngOnInit() {}

  get isFormValid(): boolean {
    return this.email.valid && this.clave.valid;
  }

  login()
  {
    this.isLoading = true;
     this.userService.login(this.email.value?.toString(),this.clave.value?.toString())
    .then(response => {
      setTimeout(() => {
        this.userService.MostrarToast("EXITO!","Seras redirigido a la pagina principal","success","checkmark-outline").then(res => {
          setTimeout(() => {
            this.navCtrl.navigateRoot(['/home'])
            this.isLoading = false
          },2500)
        })
      },2000)
    }).catch(error => {
      setTimeout(() => {
        console.log(error)
        this.userService.MostrarToast("ERROR!",this.userService.obtenerError(error),"danger","remove-circle-outline")
        this.isLoading = false
      },2000)
    })
  }

  CargarForm(usuario:number){
    if(usuario != -1)
    {
      this.email.patchValue(this.usuariosHardcode[usuario].email)
      this.clave.patchValue(this.usuariosHardcode[usuario].password)
    }
    else
    {
      this.email.reset()
      this.clave.reset()
    }
  }


}
