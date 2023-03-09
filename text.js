let arr = [{
    id: 1,
    name: "Aman",
    salary: "10000",
    email: "aman.verma@gmail.com"
}, {
    id: 2,
    name: "Priya",
    salary: "12000",
    email: "priya.sharma@gmail.com"
},
{
    id: 3,
    name: "Urvashi",
    salary: "15000",
    email: "urvashi.yadav@yopmail.com"
},
{
    id: 4,
    name: "Jay",
    salary: "11000",
    email: "mr.jay@malinator.com"
},
{
    id: 5,
    name: "Aman",
    salary: "13000",
    email: "aman.verma@gmail.com"
},
{
    id: 6,
    name: "Roshni",
    salary: "20000",
    email: "roshni.2022@vizingo.com"
},
{
    id: 7,
    name: "jay",
    salary: "25000",
    email: "mr.jay@malinator.com"
},
{
    id: 8,
    name: "Shiv",
    salary: "7000",
    email: "shiv.yadav@gmail.com"
},
{
    id: 9,
    name: "priya",
    salary: "8000",
    email: "priya.sharma@yopmail.com"
},
{
    id: 10,
    name: "Roshni",
    salary: "25000",
    email: "roshni.2022@vizingo.com"
},
{
    id: 11,
    name: "Preeti",
    salary: "21000",
    email: "preeti.pal@malinator.com"
}];
// Sorting function with custom comparison logic
arr.sort((a, b) => {
    // First, compare the names in ascending order
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
  
    // If the names are the same, compare the emails in ascending order
    if (a.email.toLowerCase() < b.email.toLowerCase()) {
      return -1;
    }
    if (a.email.toLowerCase() > b.email.toLowerCase()) {
      return 1;
    }
  
    // If the emails are also the same, compare the salaries in ascending order  
    if (a.salary < b.salary) {
      return -1;
    }
    if (a.salary > b.salary) {
      return 1;
    }
  
    // If all values are equal, the order does not matter  
    return 0;
  });
//   Display the sorted array in the console 
console.log(arr);






