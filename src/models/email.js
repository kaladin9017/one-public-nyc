import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  firstName: String,
  lastName: String
});


const ModelClass = mongoose.model('user', userSchema);

export default ModelClass;
