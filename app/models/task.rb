class Task < ApplicationRecord
  validates :name, presence: true
  validates :name, length: { in: 5..20 }
  validates :body, presence: true
  validates :body, length: { in: 10..50 }
end
