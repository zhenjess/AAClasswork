class User < ApplicationRecord
  validates :user_name, presence: true
  validates :user_name, uniqueness: true

  has_many :artworks, dependent: :destroy,
    foreign_key: :artist_id,
    class_name: :Artwork
    
  has_many :shares, dependent: :destroy,
    foreign_key: :viewer_id,
    class_name: :ArtworkShare

  has_many :viewed_artworks, 
    through: :shares,
    source: :artwork

end
