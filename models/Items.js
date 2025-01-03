import mongoose from 'mongoose';

const itemschema = new mongoose.Schema({
  name: String,
  description: String,
});

const itemModel = mongoose.model('item', itemschema);
export default itemModel;