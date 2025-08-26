import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  constructor(private router: Router) { }
  username: string | null = '';
  ngOnInit(): void {
    this.username = localStorage.getItem('username')
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
