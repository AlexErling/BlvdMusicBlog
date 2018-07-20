class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :link, :post_type, :tag_list
  has_one :admin_user
end
