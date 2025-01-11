let marks=prompt("enter your mark:");
marks=parseInt(marks);
if(marks>=90){
    console.log("A+ grade");
}
else if(marks>=80 && marks<90){
    console.log("A grade");
}
else if(marks>=70 && marks<80){
    console.log("B+ grade");
}
else if(marks>=60 && marks<70){
    console.log("B grade");
}
else if(marks>=50 && marks<60){
    console.log("C grade");
}
else{
    console.log("FAIL");
}