class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_user_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.correct_password?(password) ? user : nil
  end

  def correct_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token ||= User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end


end
