let unit = 151

if (unit <= 50 ){
    const amount = unit * 0.5
    const sur_charge = amount * 0.20;
    console.log(sur_charge)
    const total_amt  = amount + sur_charge;
    console.log(total_amt)
} else if(unit <= 150){
const amount = 25 + ((unit - 100)* 0.75)
    const sur_charge = amount * 0.20;
    console.log(sur_charge)
    const total_amt  = amount + sur_charge;
    console.log(total_amt)
}else if(unit <= 250){
    const amount =100 + ((unit - 150) * 1.20)
    const sur_charge = amount * 0.20;
    console.log(sur_charge)
    const total_amt  = amount + sur_charge;
    console.log(total_amt)
}else
{
    const amount = 220 + ((unit-250) * 1.50);
    const sur_charge = amount * 0.20;
    console.log(sur_charge)
    const total_amt  = amount + sur_charge;
    console.log(total_amt)
}

