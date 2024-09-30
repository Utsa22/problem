const year = 1990;
if(year % 4== 0 % year%100==1){
    console.log("Leap Year"+ year);
}
else if(year % 400 ==0){
    console.log("Leap Year" + year);
}
else{
    console.log("Not Leap Year" + year)
}