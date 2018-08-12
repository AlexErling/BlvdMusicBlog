class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :link, :post_type, :tag_list, :image, :song_title, :created_at
  has_one :user
end
