class Wish < ApplicationRecord
  belongs_to :user
  belongs_to :wish_category, optional: true
  enum status: [:active, :finished]
  def is_completed?
     self.status == 'finished'
  end
end
