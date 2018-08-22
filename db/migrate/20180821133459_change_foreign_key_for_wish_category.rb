class ChangeForeignKeyForWishCategory < ActiveRecord::Migration[5.2]
  def change
    rename_column :wishes, :category_id, :wish_category_id
  end
end
