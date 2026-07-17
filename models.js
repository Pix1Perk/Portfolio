const mongoose = require('mongoose');

// Portfolio Schema
const portfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    technologies: [String],
    link: String,
    github: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Contact Message Schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = {
    Portfolio: mongoose.model('Portfolio', portfolioSchema),
    Contact: mongoose.model('Contact', contactSchema),
    User: mongoose.model('User', userSchema)
};
