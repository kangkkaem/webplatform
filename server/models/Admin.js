const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminName: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String , required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User와 연결
  });
  
  const Admin = mongoose.model('Admin', adminSchema);
  module.exports = Admin;