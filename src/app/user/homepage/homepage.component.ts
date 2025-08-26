import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {

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
