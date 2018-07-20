# frozen_string_literal: true

Rails.application.routes.draw do
  scope path: 'api/v1/auth', defaults: { format: :json } do
    devise_for :users, controllers: { sessions: 'authentication_tokens' },
               path: '', path_names:
                   {
                       sign_in: 'login', sign_out: 'logout',
                       sign_up: 'register', edit: 'settings'
                   }
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
