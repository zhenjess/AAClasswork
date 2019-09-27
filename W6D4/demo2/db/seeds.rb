# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#sanitize the database
User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

# create new users
User.create(user_name: 'Leonardo')
User.create(user_name: 'Monet')

#create new artworks
Artwork.create(title: 'Mona Lisa', img_url: 'www.here.com', artist_id: 1)
Artwork.create(title: 'Water Lilies', img_url: 'www.now.com', artist_id: 2)

#create new artwork joins entries
ArtworkShare.create(artwork_id: 1, viewer_id: 1)
ArtworkShare.create(artwork_id: 2, viewer_id: 2)
