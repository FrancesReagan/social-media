
import mongoose from "mongoose";



// define new schema//
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // Field must be provided//
    required: [true, 'Username is required'], 
     // Must be unique in the collection//
    unique: true,   
    // Removes whitespace//                       
    trim: true,      
      // Minimum length//                       
    minlength: 3,                         
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
     // Converts email to lowercase//
    lowercase: true,              
    // Regex for email format//        
    match: [/.+\@.+\..+/, 'Please enter a valid email address'] 
  },

  age: {
    type: Number,
    // Minimum value//
    min: [18, 'Must be at least 18 years old'], 
     // Maximum value//
    max: 120                                 
  },

  role: {
    type: String,
    enum: {
      // The value must be one of these strings--make sure default value user is listed here as well//
      values: ['user', 'admin'],            
      message: '{VALUE} is not a supported role'
    },
     // If not provided, defaults to 'user'//
    default: 'user'                        
  },

  // like a timestamp for my documents//
  createdAt: {
    type: Date,
    // Sets the value to the current date/time//
    default: () => Date.now(),    
    // if set to true--it cannot be changed after creation//          
    immutable: true                         
  },

    isVerfied: {
      type: Boolean,
      default: false
    },

});

// this will create the user model for the users' collection//
export default mongoose.model("User", userSchema);