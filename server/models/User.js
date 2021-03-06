const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: async value => {
            const user = await User.findOne({email: value});
            if (user) return false;
          },
          message: "This email is already registered"
        }
      },  
    password: {
        type: String,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    }}, 
    {writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }});

UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});

UserSchema.set("toJSON", {
  transform: function(doc, ret) {
    delete ret.password;
    return ret;
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;