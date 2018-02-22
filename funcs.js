exports.calc_salary=(base)=>{
    travel_allowance = base * 0.05;
    dearness_allowance = base * 0.1;
    human_resource_allowance = base * 0.2;
    provident_fund = base * 0.2;
    life_insurance = base * 0.1;
    gross = base + travel_allowance + dearness_allowance + human_resource_allowance
    net = gross - provident_fund - life_insurance

    console.log("Base Salary:"+base);
    console.log("travel allowance: +5%: "+travel_allowance);
    console.log("dearness allowance: + 10%: "+dearness_allowance);
    console.log("human_resource allowance: + 20%: "+human_resource_allowance);
    console.log("provident fund: - 20%: "+provident_fund);
    console.log("life insurance: -10%: "+life_insurance);
    console.log("gross salary: "+gross);
    console.log("net salary: "+net);
}
