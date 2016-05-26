Rails.application.routes.draw do
  devise_for :users, skip: ["registration", "password"]
  resources :entries
  root "game#index"
end
