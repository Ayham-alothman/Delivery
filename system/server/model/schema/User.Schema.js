import mongoose,{Schema} from 'mongoose';

const userSchema=new Schema({
username:{require:true,typeof:String},
password:{require:true,typeof:String},
email:{typeof:String,require:true},
actor:{typeof:String,Enume:[`driver`,'supermarket','factory'],require:true},
idActore:{typeof:Schema.Types.ObjectId,require:true}
})

const User= mongoose.model('user',userSchema);
export {User} ;
