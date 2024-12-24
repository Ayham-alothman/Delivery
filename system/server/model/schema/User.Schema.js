import mongoose,{Schema} from 'mongoose';
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    actor: { type: String, required: true },
    idActore: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const User= mongoose.model('user',UserSchema);
export {User} ;
