import { Component } from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // to create a instance of LoggingService provider of the class is required
  // providers:[LoggingService]
})
export class NewAccountComponent {
  
  //INJECTING LOGGING SERVICE INTO COMPONENT
  //a new instance of type LoggingService is created by Angular
  //alternate to instantiating the class manually
  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService){
      this.accountsService.statusUpdated.subscribe(
        (status:string) => alert(' New Status: ' + status));
      
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

  
}
