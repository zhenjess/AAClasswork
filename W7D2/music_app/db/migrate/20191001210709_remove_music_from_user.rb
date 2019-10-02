class RemoveMusicFromUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :music_id
  end
end
