class CreateCommentsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :comments_tables do |t|
      t.integer :artwork_id, null: false
      t.integer :user_id, null: false
      t.text :body, null: false
    end
    add_index :artwork_id
  end

end
