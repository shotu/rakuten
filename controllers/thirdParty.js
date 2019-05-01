const regresBaseUrl = "https://reqres.in/api/users";
var Request = require("request");
exports.getRegreUsersData = (pageNumber) => {
  return new Promise((resolve, reject)=>{
    Request.get(regresBaseUrl+`?page=${pageNumber}`, (error, response, body) => {
        if(error) {
            return console.log(error);
            reject(error)
        }
        resolve(JSON.parse(body));
    });
  })
}