export class Init {
    load() {
      if(localStorage.getItem('Employees') === null || localStorage.getItem('Employees') == undefined) {
        console.log('No Employees Found... Creating...');
        let Employees = [
            {
                "empId":530086,
                "empName":"Romin Irani",
                "emailAddress":"romin.k.irani@gmail.com",
                "empSalary": "$500 USD"
             },
             {
                "empId":530087,
                "empName":"Neil Irani",
                "emailAddress":"neilrirani@gmail.com",
                "empSalary": "$700 USD"
             },
             {
                "empId":530088,
                "empName":"Tom Hanks",
                "emailAddress":"tomhanks@gmail.com",
                "empSalary": "$800 USD"
             }
        ];
  
        localStorage.setItem('Employees', JSON.stringify(Employees));
        return 
      } else {
        console.log('Found Employees...');
      }
    }
  }