class Wish < ApplicationRecord
  belongs_to :user
  belongs_to :wish_category
  enum status: [:active, :finished]
  def is_complited?
     self.status == 'finished'
  end
end
