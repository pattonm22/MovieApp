import { Component, inject, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input({required: true}) userImg: string = '';

  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  auth = inject(AuthService);
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  navList = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Language"]

}
