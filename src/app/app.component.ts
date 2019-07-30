import { Component, OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  update = false;
  constructor(private route: ActivatedRoute, private router: Router, private snackbar: MatSnackBar, public updates: SwUpdate) { }

  ngOnInit() {
    this.updates.available.subscribe(update => {
      this.update = true;
      const snack = this.snackbar.open('New version available. Load New Version?', 'Reload', {
        duration: 6000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['bg-success']
      });
      snack.onAction().subscribe(() => {
        this.updates.activateUpdate().then(() => document.location.reload());
      });
    });
  }
}
