var salesbyemp = prompt('enter the number of sales done by employee',)
if(salesbyemp>=0 && salesbyemp<=5000)
{
    commissionperc = 0.02;
    commission = salesbyemp * commissionperc;
    console.log(commission);    
}
else if(salesbyemp>=5001 && salesbyemp<=10000)
{
    commissionperc = 0.05;
    commission = salesbyemp * commissionperc
    console.log(commission);
}
else if(salesbyemp>=10001 && salesbyemp<=20000)
{
    commissionperc = 0.07;
    commission = salesbyemp * commissionperc;
    console.log(commission);
}
else{
    commissionperc = 0.1;
    commission = salesbyemp * commissionperc;
    console.log(commission);
}



