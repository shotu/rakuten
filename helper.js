
const { Parser } = require('json2csv');
const fs = require('fs');
exports.convertJsonTocsv = (jsonArrayData) => {
  return new Promise( (resolve, reject) => {
    try{
      const fields = ['id', 'first_name', 'last_name','avatar'];
      const json2csvParser = new Parser({ fields });
      const csv = json2csvParser.parse(jsonArrayData);

      fs.writeFileSync('users.csv', csv, function(err) {
        if (err) throw err;
        console.log('cars file saved');
        resolve("users.csv");
      });  

    }catch(e){
      reject(e);
    }
  })
}

