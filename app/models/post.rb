class Post < ApplicationRecord
  belongs_to :admin_user
  enum post_type: [ :Song, :Playlist, :Video, :Event ]

end
