import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy{
  private subscription: Subscription;
  message: any;
  constructor(private alertservice: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertservice.getMessage().subscribe(message => {
      this.message = message;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe;
  }
}
