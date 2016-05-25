Rails.application.routes.draw do
  devise_for :users, skip: ["registration", "password"]
  resources :entrees
  root "game#index"
end
