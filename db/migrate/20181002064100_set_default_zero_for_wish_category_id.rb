class SetDefaultZeroForWishCategoryId < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:wishes, :orderNumber, false, 0 )
    change_column_default(:wishes, :orderNumber,  0 )

    change_column_null(:wishes, :wish_category_id, false, 0 )
    change_column_default(:wishes, :wish_category_id,  0 )

  end
end
