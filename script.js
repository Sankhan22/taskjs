let salary = 350;
let request = 2500;
let period = 36;
let workingPeroid = 12;
let maxkredit = salary * 10;
let maxsalary = salary * 0.45;
if ( maxkredit < request){
    console.log('size bu shertlerle kredit dushmur')
}
if (period <= 12 ){
var perc = 13 

} else if ( period <= 24){
 var perc = 15;
} else if ( period <= 36){
    var perc = 17;
}
let monsal =Math.round ((request + (request  * (perc/100)))/ period);
if ( monsal > maxsalary) {
    console.log (  'size bu shertlerle kredit dushmur' );

}else {
    console.log ( request + ' azn mebleg size ' + perc +'% ' + period + ' ay muddetine  ayliq ' + monsal + ' manat odenishle veririlir')
}

console.log(monsal)

