class Post < ApplicationRecord
  belongs_to :user
  has_attached_file :image, styles: { thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  enum post_type: [ :Song, :Playlist, :Video, :Event ]
  acts_as_taggable

  validates :post_type, :presence => true
  validates :title, length: { maximum: 150}, :presence => true
  validates :body, :presence => true


  include PgSearch
  pg_search_scope :quick_search,
                  against: [:title, :song_title],
                  associated_against: { tags: [:name], user: [:name]},
                  using: {tsearch: {:prefix => true}}
end
