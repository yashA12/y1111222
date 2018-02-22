var funcs = require("./funcs");


salaries = [
  {
    name:"Yash",
    salary:100000
  },
  {
    name:"Ravi",
    salary:100000
  },
  {
    name:"Arjun",
    salary:100000
  }
]

for(i=0;i<3;i++){
  console.log("Name:"+salaries[i].name);
  funcs.calc_salary(salaries[i].salary);
  console.log("----------------");
}
