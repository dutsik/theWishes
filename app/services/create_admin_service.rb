class CreateAdminService
  def call

    cat = WishCategory.find_or_create_by!(name: 'Здоровье') do |category|
      category.name = 'Здоровье'
    end
    cat = WishCategory.find_or_create_by!(name: 'Путешествия') do |category|
      category.name = 'Путешествия'
    end
    cat = WishCategory.find_or_create_by!(name: 'Семья') do |category|
      category.name = 'Семья'
    end
    cat = WishCategory.find_or_create_by!(name: 'Саморазвитие') do |category|
      category.name = 'Саморазвитие'
    end
    cat = WishCategory.find_or_create_by!(name: 'Обучение') do |category|
      category.name = 'Обучение'
    end
    cat = WishCategory.find_or_create_by!(name: 'Самореализация') do |category|
      category.name = 'Самореализация'
    end

    cat = WishCategory.find_or_create_by!(name: 'Новые ощущения') do |category|
      category.name = 'Новые ощущения'
    end
    cat = WishCategory.find_or_create_by!(name: 'Для удовольствия и души') do |category|
      category.name = 'Для удовольствия и души'
    end
    user = User.find_or_create_by!(email: Rails.application.secrets.admin_email) do |user|
      user.password = Rails.application.secrets.admin_password
      user.password_confirmation = Rails.application.secrets.admin_password
      user.confirm
      user.admin!
    end

  end
end
