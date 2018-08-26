class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :link, :post_type, :tag_list, :image, :song_title, :created_at, :slug, :url_slug
  has_one :user
end
