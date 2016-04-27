class Entree < ActiveRecord::Base
  EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  validates :first_name, :last_name, :phone, presence: true
  validates :email, presence: true, :format => EMAIL_REGEX
end
