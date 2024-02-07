const salary =22000

if (salary <=10000){
    const hra =salary * (0.2)
    const  da = salary * (0.8)

    const GrossSalary = salary + hra + da
    console.log(GrossSalary)
} else if(salary  <= 20000){
    const hra =salary * (0.25)
    const  da = salary * (0.90)

    const GrossSalary = salary + hra + da
    console.log(GrossSalary)
}else{
    const hra =salary * (0.3)
    console.log(hra)
    const  da = salary * (0.95)
console.log(da)
    const GrossSalary = salary + hra + da
    console.log(GrossSalary)
}
