class AddDueDateToWish < ActiveRecord::Migration[5.2]
  def change
    add_column :wishes, :due_date, :datetime
  end
end
