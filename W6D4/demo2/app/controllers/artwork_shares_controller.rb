class ArtworkSharesController < ApplicationController
  def create
    artwork_shares = ArtworkShare.new(share_params)
    if artwork_shares.save
      render json: artwork_shares
    else
      render json: artwork_shares.errors.full_messages, status: 422
    end
  end

  def destroy
    artwork_shares = ArtworkShare.destroy(params[:id])
    render json: artwork_shares
  end

  private
  def share_params
    params.require(:artwork_shares).permit(:artwork_id, :viewer_id)
  end
end