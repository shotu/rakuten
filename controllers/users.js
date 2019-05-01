var thirdPartyController = require("./thirdParty")
var helper = require('../helper')
exports.getUserDetailsCsv = (pageNumber, callback) => {
  thirdPartyController.getRegreUsersData(pageNumber).then(data =>{
    let usersArray = data.data; 
   return  helper.convertJsonTocsv(usersArray);
  }).then(csv_name => {
    callback(null, csv_name);
  })
  .catch(e=>{
    callback(e, null);
  })
}