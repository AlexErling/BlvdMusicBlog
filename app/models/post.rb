class Post < ApplicationRecord
  belongs_to :admin_user
  has_one_attached :image
  enum post_type: [ :Song, :Playlist, :Video, :Event ]
  acts_as_taggable
  # validate :correct_image_type
  #
  # def correct_image_type
  #   if image.attached? && !image.content_type.in?(%w(image/jpeg image/png))
  #       errors.add(:image, "Must be a JPEG or PNG.")
  #   end
  # end

end
