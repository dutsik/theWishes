class CreateWishCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :wish_categories do |t|
      t.string :name
      t.timestamps
    end

    add_column :wishes, :category_id, :integer
    add_foreign_key :wishes, :wish_categories,
                    column: :category_id,
                    primary_key: :id
    add_index :wishes, :category_id, unique: false
  end
end
