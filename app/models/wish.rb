class Wish < ApplicationRecord
  belongs_to :user
  enum status: [:active, :finished]
  def is_complited?
     self.status == 'finished'
  end
end
