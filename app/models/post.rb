class Post < ApplicationRecord
  belongs_to :user
  has_attached_file :image, styles: { large: "500x500>", medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  enum post_type: [ :Song, :Playlist, :Video, :Event ]
  acts_as_taggable

  #Validations
  # validate :correct_image_type
  validates :post_type, :presence => true
  validates :title, length: { maximum: 150}, :presence => true
  validates :body, :presence => true


end
