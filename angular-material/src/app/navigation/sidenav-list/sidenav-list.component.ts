import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() closeOnClick = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  isAuth = false;
  authSubscription: Subscription;

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  onClose() {
    this.closeOnClick.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
