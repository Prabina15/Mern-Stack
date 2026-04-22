<<<<<<< HEAD
import fs from "fs";

const fetchData = new Promise ((resolve, reject) => {
    fs.readFile("data/data.txt","utf-8",(error, data)=>{
    if(error){
        reject(error);
    }
    else{
        resolve(data);
    }
});
});

fetchData.then((data) => {
    console.log(data);
=======
import fs from "fs";

const fetchData = new Promise ((resolve, reject) => {
    fs.readFile("data/data.txt","utf-8",(error, data)=>{
    if(error){
        reject(error);
    }
    else{
        resolve(data);
    }
});
});

fetchData.then((data) => {
    console.log(data);
>>>>>>> 6702212 (fix project structure and add files)
});