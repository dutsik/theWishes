json.array! @wishes do |wish|
  json.id wish.id
  json.title wish.body
  json.due_at nil
  json.is_completed wish.is_complited?
end