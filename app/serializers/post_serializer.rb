class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :link, :post_type, :tag_list, :image, :thumb, :post_name, :created_at, :slug, :url_slug
  has_one :user

  def thumb
    object.image.url(:thumb)
  end

end
