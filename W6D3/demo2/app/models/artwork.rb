class Artwork < ApplicationRecord
  validates :title, :img_url, :artist_id, presence: true
  validates :title, uniqueness: { scope: :artist_id, message: "artists can't have two works the same name" }

  belongs_to :artist
    foreign_key: :artist_id,
    class_name: :User


  end
