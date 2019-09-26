class User < ApplicationRecord
  validates :user_name, presence: true
  validates :user_name, uniqueness: true

  has_many :artworks,
    foreign_key: :artwork_id,
    class_work: :Artwork


end
