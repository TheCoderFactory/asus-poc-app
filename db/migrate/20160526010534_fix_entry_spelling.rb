class FixEntrySpelling < ActiveRecord::Migration
  def change
    rename_table :entrees, :entries
  end
end
