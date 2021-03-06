var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    create_date: {
        type: Date,
        default: Date.now
    },
    user_type: {
        type: String,
        default: 'user'
    }
});

// Export User model
var User = module.exports = mongoose.model('User', userSchema);

module.exports.get = function(callback, limit) {
    User.find(callback).limit(limit);
}