class AddColumnsToPosts < ActiveRecord::Migration[5.2]
  def change
    add_reference :posts, :user, foreign_key: true
    add_column :posts, :post_type, :integer
    add_column :posts, :link, :string
    add_column :posts, :url_slug, :string
    add_column :posts, :post_name, :string
  end
end
