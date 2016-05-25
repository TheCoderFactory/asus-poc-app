class AddCityToEntree < ActiveRecord::Migration
  def change
    add_column :entrees, :city, :string
  end
end
