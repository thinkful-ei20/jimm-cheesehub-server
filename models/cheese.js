const mongoose = require('mongoose');

const cheeseSchema = mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true});


cheeseSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Cheese', cheeseSchema);