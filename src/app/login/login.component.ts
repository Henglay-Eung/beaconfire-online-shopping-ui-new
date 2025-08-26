import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  login(): void {
  const {username, password} = this.loginForm.value;

    if (!username || !password) {
      return;
    }

    this.authService.login(username, password).subscribe(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('username', data.username);

      if (data.role === 'admin') {
        this.router.navigate(['admin']);
      } else {
         this.router.navigate(['']);
      }
     
    })
  }

}
