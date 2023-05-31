import { connect, Collection, Schema, model } from 'mongoose';
connect('mongodb://localhost:27017/volunteer', {useNewUrlParser: true});
var conn =Collection;
 
var VolunteerSchema =new Schema({
	name: String,
	email: String,
	contact: Number,
	domain: String,
	qualification: String,
});
 
var Model = model('Volunteer', VolunteerSchema);
var all_volunteers =Model.find({});
 
router.post('/', function(req, res, next) {
    console.log(req.body, "hey")
  var volunteerDetails = new Model({
    name: req.body.uname,
    email: req.body.email,
    contact: req.body.emptype,
    domain: req.body.hrlyrate,
    qualification: req.body.ttlhr,
  });
 
  volunteerDetails.save(function(err,req1){
    if(err) throw err;
    employee.exec(function(err,data){
      if(err) throw err;
      res.render('index', { title: 'Volunteer Records', records:data, success:'Record Inserted Successfully' });
        });
  })
  
  
});