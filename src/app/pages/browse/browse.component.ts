import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/core/components/banner/banner.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {

  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;


  signOut() {
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }

}

