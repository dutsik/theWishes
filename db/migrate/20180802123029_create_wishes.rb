class CreateWishes < ActiveRecord::Migration[5.2]
  def change
    create_table :wishes do |t|
      t.string :body, null: false, default: ""
      t.integer :orderNumber, null: false, default: ""
      t.integer :status, null: false, default: 0
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end
