class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :link, :post_type, :tag_list, :image, :post_name, :created_at, :slug, :url_slug
  has_one :user
end
