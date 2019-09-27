class ArtworksController < ApplicationController
  def index
    artworks = Artwork.joins(:artist).where(users: {id: params[:user_id]})
    render json: artworks
  end

  def create
      artwork = Artwork.new(art_params)
      if artwork.save
        render json: artwork
      else
        render json: artwork.errors.full_messages, status: 422
      end
  end

  def show
    artwork = Artwork.find(params[:id])
    render json: artwork
  end

  def destroy
    artwork = Artwork.destroy(params[:id])
    render json: artwork
  end

  def update
    artwork = Artwork.find(params[:id])

    if artwork.update(art_params)
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: 422
    end
  end

  private
    def art_params
      params.require(:artwork).permit(:title, :img_url, :artist_id)
    end

end