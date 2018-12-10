var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var DoctorSchema= new mongoose.Schema({
	"first_name":{type:Schema.Types.String,required:true},
	"last_name":{type:Schema.Types.String,required:true},
	"age":{type:Schema.Types.Number,required:true},
	"address":{type:Schema.Types.String,required:true},
	"username":{type:Schema.Types.String,required:true,unique:true},
	"email":{type:Schema.Types.String,required:true,unique:true},
	"password":{type:Schema.Types.String,required:true},
	"role":{type:Schema.Types.String,required:true},
	"createdAt":{type:Schema.Types.Date,required:true,default:Date.now()},
	"isActivate":{type:Schema.Types.Boolean,required:true,default:true},
	"patientID":[{type:Schema.Types.ObjectId}]
});

DoctorSchema.virtual('PatientDetails',{
	ref: 'Patient',
    localField: 'patientID',
    foreignField: '_id',
    justOne: false
})


module.exports=mongoose.model('Doctor',DoctorSchema);