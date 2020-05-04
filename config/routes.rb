Rails.application.routes.draw do
  resources :todos

  get "users/auth_check" => "users#auth_check"
  devise_for :users, controllers: {
    registrations: "users/registrations",
    omniauth_callbacks: "users/omniauth_callbacks"
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'todos#index'
end
