import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any):number{
    let today:Date = new Date();//Get the current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(value-todayWithNoTime)//returns value in milliseconds;
    const secondsInDay = 86400; //60 sec * 60 minutes in an hour *24hours

    var dateDifferenceSeconds = dateDifference*0.001;//converts to seconds

    var dateCounter = dateDifferenceSeconds/secondsInDay;
    console.log(value);

    if (dateCounter>=1){
      return dateCounter;
    }else{
      return 0;
    }
  }
}
