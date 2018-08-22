json.array! @wishes do |wish|
  json.id wish.id
  json.title wish.body
  json.due_at nil
  json.is_completed wish.is_complited?
  if wish.wish_category.nil?
    json.category nil
  else
    json.category do |c|
      json.name wish.wish_category.name
      json.id   wish.wish_category.id
    end

  end

  end