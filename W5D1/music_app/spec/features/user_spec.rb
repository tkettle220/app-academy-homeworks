require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    user = User.new(email: 'tkilmer95@gmail.com', password: 'password')
  end


  describe 'validations' do
    # it {should validate_presence_of(:email)}
    # it {should validate_presence_of(:password_digest)}
    # it {should validate_length_of(:password).is_at_least(6)}
  end

  describe '#is_password?' do
    it 'checks if passwords match' do
      expect(user.is_password?("password")).to be true
    end
  end

  describe '#reset_session_token' do
    it 'resets a user\'s session token' do
      first_token = user.session_token
      user.reset_session_token!
      expect(first_token).to_not eq(first_token)
    end

  end

  describe '::find_by_credentials' do
    it 'finds a user by email and password' do
      expect(User.find_by_credentials("tkilmer95@gmail.com", "password")).to eq(user)
    end
    it 'returns nil if no users matches' do
      expect(User.find_by_credentials("tkilmer95@gmail.com", "nottherightpassword").to eq(nil)
    end
  end

end
