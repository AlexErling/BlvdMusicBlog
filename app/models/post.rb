class Post < ApplicationRecord
  belongs_to :user
  has_attached_file :image, styles: { thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  enum post_type: [ :Song, :Playlist, :Video, :Event ]
  acts_as_taggable
  validates :post_type, :presence => true
  validates :url_slug, :presence => true, :uniqueness => true
  validates :title, length: { maximum: 150}, :presence => true
  validates :body, :presence => true
  validates :post_name, :presence => true

  extend FriendlyId
  friendly_id :url_slug, use: :slugged

  def should_generate_new_friendly_id?
    url_slug_changed?
  end


  include PgSearch
  pg_search_scope :quick_search,
                  against: [:title, :post_name],
                  associated_against: { tags: [:name], user: [:name]},
                  using: {tsearch: {:prefix => true}}

  pg_search_scope :user_search,
                  associated_against: {user: [:slug]},
                  using: {tsearch: {:prefix => true}}
end
