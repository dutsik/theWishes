json.id wish.id
json.title wish.body
json.orderNumber wish.orderNumber
if wish.due_date.nil?
  json.due_at nil
else
  json.due_at wish.due_date.strftime('%Y-%m-%d')
end
json.is_completed wish.is_completed?
if wish.wish_category.nil?
  json.category nil
else
  json.category do |c|
    json.name wish.wish_category.name
    json.id   wish.wish_category.id
  end
end
