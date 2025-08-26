import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  signup() {
    const {username, email, password} = this.signupForm.value;

    if (!username || !email || !password) {
      return;
    }

    this.authService.signup(username, email, password).subscribe(() => {
      this.authService.login(username, password).subscribe(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('username', data.username)
        this.router.navigate(['']);
      })
    })
  }

}
