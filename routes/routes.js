var userController = require("../controllers/users");

var appRouter = function (app) {
  app.get("/api/csv_file", function(req, res) {    
    console.log("page ",req.query.page)
    let pageNumber = req.query.page;
    userController.getUserDetailsCsv(pageNumber, (err, data)=>{
      if(err){
        res.status(500).send("Internal error occured");
      }
      res.json(data);
      // res.status(200).send("Welcome to our restful API");
    })
   
  });

}

module.exports = appRouter;