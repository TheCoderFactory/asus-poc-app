class SetDefaultIWantMoreInfoToYes < ActiveRecord::Migration
  def change
    change_column :entrees, :know_more, :boolean, default: true
  end
end
