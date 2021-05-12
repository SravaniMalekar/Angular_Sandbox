import { Component, Input} from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // to create a instance of LoggingService provider of the class is required
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

    //INJECTING LOGGING SERVICE INTO COMPONENT
  //a new instance of type LoggingService is created by Angular
  //alternate to instantiating the class manually
  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService){

  }

  onSetTo(status: string) {
    // this.loggingService.logStatusChange(status);
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }
}
