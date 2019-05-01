
const { Parser } = require('json2csv');

exports.convertJsonTocsv = (jsonArrayData) => {
  return new Promise( (resolve, reject) => {
    try{
      const fields = ['id', 'first_name', 'last_name','avatar'];
      const json2csvParser = new Parser({ fields });
      const csv = json2csvParser.parse(jsonArrayData);
      resolve(csv);
    }catch(e){
      reject(e);
    }
  })
}

