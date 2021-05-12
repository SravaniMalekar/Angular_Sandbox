//Class can be used as a service for logging data
export class LoggingService{
    logStatusChange(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}