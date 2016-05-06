class UpdateEntreeFields < ActiveRecord::Migration
  def change
    add_column :entrees, :school_or_business, :string
    add_column :entrees, :know_more, :boolean
  end
end
