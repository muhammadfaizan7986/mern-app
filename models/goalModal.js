const mongoose = require("mongoose");
const goalModal = mongoose.Schema({
  goal: {
    type:String,
    required:[true,'plz fill the filde']
  },
});
module.exports = mongoose.model('Goal',goalModal)