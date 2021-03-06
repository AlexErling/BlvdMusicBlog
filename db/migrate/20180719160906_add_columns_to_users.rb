class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :admin, :boolean, default: false
    add_column :users, :bio, :string
    add_column :users, :location, :string
  end
end
