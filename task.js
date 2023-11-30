//for the given json iterate over all for loops (for for in for of foreach)
/*let jsonvalue =
{
    name:"nandhini",
    age:29
}
let value =JSON.stringify(jsonvalue);
console.log(value);
for(let i=0;i<value.length;i++)
{
    console.log(value[i]);
}
*/

// for the 
/*let jsonvalue =
{
    name:"nandhini",
    age:29
}
//let value =JSON.stringify(jsonvalue);
//console.log(value);
for(let key in jsonvalue)
{
    console.log(`${key}: ${jsonvalue[key]}`);
}

*/

//create your own resume data in json format

let resume={
    name:"Nandhini",
    age:29,
    email_id:"nandhiniponvelnt@gmail.com",
    phone_number:8778079228,

    education:{
        school:"DVC",
        college:"Tagore Engineering College"
    },
    work_experience:{
        2015_2017:"Merit Software services pvt ltd",
        2020_2022:"TSCB",
        2022_2023:"Virstusa"
    },
   skillset:['sql','plsql']

}
console.log(resume);
