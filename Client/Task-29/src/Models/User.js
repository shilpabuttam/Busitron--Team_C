const mongoose = require('mongoose');

const privacySettingsSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    profileVisibility: { type: String, enum: ['public', 'private'], default: 'public' },
    videoVisibility: { type: String, enum: ['public', 'friends', 'private'], default: 'public' },
    commentVisibility: { type: String, enum: ['public', 'friends', 'private'], default: 'public' },
    twoFactorEnabled: { type: Boolean, default: false },
});

const PrivacySettings = mongoose.model('PrivacySettings', privacySettingsSchema);

module.exports = PrivacySettings;
