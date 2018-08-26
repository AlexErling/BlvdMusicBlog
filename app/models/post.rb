class Post < ApplicationRecord
  belongs_to :user
  has_attached_file :image, styles: { thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  enum post_type: [ :Song, :Playlist, :Video, :Event ]
  acts_as_taggable
  extend FriendlyId
  friendly_id :url_slug, use: :slugged

  def should_generate_new_friendly_id?
    url_slug_changed?
  end


  validates :post_type, :presence => true
  validates :title, length: { maximum: 150}, :presence => true
  validates :body, :presence => true
  validates :song_title, :uniqueness => true, :presence => true



  include PgSearch
  pg_search_scope :quick_search,
                  against: [:title, :song_title],
                  associated_against: { tags: [:name], user: [:name]},
                  using: {tsearch: {:prefix => true}}
end
