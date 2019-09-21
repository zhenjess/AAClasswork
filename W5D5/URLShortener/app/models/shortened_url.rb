class ShortenedUrl < ApplicationRecord
  validates :shorturl, :longurl, presence: true, uniqueness: true

  def self.random_code
    loop do
      random = SecureRandom.urlsafe_base64(16)
      return random unless random.exists?
    end
    
  end 
end
