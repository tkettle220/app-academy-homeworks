class UserMailer < ApplicationMailer
  default from: 'TK: thomas.kilmer@yale.edu'

  def welcome_email(user)
    @user = user
    @url = 'http://cats.com/login'
    mail(to: "tkilmer95@gmail.com", subject: 'Welcome!')
  end

end
