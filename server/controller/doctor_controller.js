var Doctor=require('../model/doctor_model');
var Patient=require('../model/patient_model');
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
var keys=require('../bin/keys');

exports.register=function(req,res){
    var data=req.body;
    var password=data.password;
    if(password){
        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,function(err,hash){
                if(hash){
                    data.password=hash;
                        Doctor.create(data,function(err,doc){
                        if(!err && doc){
                          return res.send('Doctor Successfully Register')
            }       else{
                return res.send('Registration Unsuccessfull')
            }
        })
                }
            })
        })
    }

   
}

exports.login=function(req,res){
    var data=req.body;
    Doctor.findOne({username:data.username,email:data.email},function(err,doc){
        if(!err && doc){
            bcrypt.compare(data.password,doc.password,function(err,result){
                if(err){
                    return res.send('password is wrong')
                }
                else{
                    var token=doc._id
                     return res.send(token)
                    // var token=jwt.sign({_id:doc._id},keys.jwt_key);
                    // // console.log(token);
                    // return res.send(token)
                }
            })
        }else{
            return res.send('username or email not find')
        }
    })
}

exports.createPatient=function(req,res){
    var data=req.body;
    data.doctorID=data.token;
    Patient.create(data,function(err,pat){
        if(err){
            console.log(err)
        }else{
            Doctor.findByIdAndUpdate(data.token,{$push:{patientID:[pat._id]}}).exec(function(err,docc){
                if(err){
                    return res.send(err)
                }else{
                    return res.send(docc)
                }
            })
        }
    })
}

exports.patcount=function(req,res){
    var data=req.body;
    Patient.find({doctorID:data.token}).count(function(err,count){
        if(err){
            return res.send(err)
        }else{
            return res.json(count)
        }
    })
}

exports.getAllPatients=function(req,res){
    Patient.find(function(err,pat){
        if(err){

        }else{
            return res.send(pat)
        }
    })
}