json.id wish.id
json.title wish.body
json.due_at nil
json.is_completed wish.is_complited?
if wish.wish_category.nil?
  json.category nil
else
  json.category wish.wish_category.name
end
