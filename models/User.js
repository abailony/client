import mongoose from 'mongoose';

const CampaignSchema = new mongoose.Schema({
  id: String,
  name: String,
  adsets: [{
    id: String,
    name: String,
    ads: [{
      id: String,
      name: String,
      leads: [{
        id: String,
        created_time: Date,
        field_data: [{
          name: String,
          values: [String]
        }]
      }]
    }]
  }]
});

const AdAccountSchema = new mongoose.Schema({
  id: String,
  name: String,
  campaigns: [CampaignSchema]
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user',
  },
  adAccounts: [AdAccountSchema]
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;