var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PatientSchema= new mongoose.Schema({
	"first_name":{type:Schema.Types.String,required:true},
    "last_name":{type:Schema.Types.String,required:true},
    "gender":{type:Schema.Types.String,required:true},
    "primary_number":{type:Schema.Types.Number,required:true},
    "secondry_number":{type:Schema.Types.Number},
    "adhar":{type:Schema.Types.Number,unique:true},
	"age":{type:Schema.Types.Number,required:true},
    "present_address":{type:Schema.Types.String,required:true},
    "postal_code":{type:Schema.Types.String,required:true},
    "permanent_address":{type:Schema.Types.String},
    "marital_status":{type:Schema.Types.String},
    "father_name":{type:Schema.Types.String,required:true},
    "education":{type:Schema.Types.String},
    "occupation":{type:Schema.Types.String},
    "identification_mark":{type:Schema.Types.String},
    "monthly_income":{type:Schema.Types.String},
    "religion":{type:Schema.Types.String,required:true},
    "family_type":{type:Schema.Types.String},
    "locality":{type:Schema.Types.String,required:true},
    "town":{type:Schema.Types.String,required:true},
    "state":{type:Schema.Types.String,required:true},
    "country":{type:Schema.Types.String,required:true},
    "nationality":{type:Schema.Types.String,required:true},
    "information_source":{type:Schema.Types.String},
    "email":{type:Schema.Types.String},
	"createdAt":{type:Schema.Types.Date,required:true,default:Date.now()},
    "isActivate":{type:Schema.Types.Boolean,required:true,default:true},
    "doctorID":[{type:Schema.Types.ObjectId}]
});

PatientSchema.virtual('Doctordetails',{
    ref: 'Doctor',
    localField: 'doctorID',
    foreignField: '_id',
    justOne: false
})


module.exports=mongoose.model('Patient',PatientSchema);