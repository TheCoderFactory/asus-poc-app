require 'csv'
class Entry < ActiveRecord::Base
  EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  validates :first_name, :last_name, :phone, :school_or_business, :city, presence: true
  validates :email, presence: true, :format => EMAIL_REGEX

  def self.to_csv(options = {})
    CSV.generate(options) do |csv|
      csv << column_names
      all.each do |product|
        csv << product.attributes.values_at(*column_names)
      end
    end
  end
end
