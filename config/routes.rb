Rails.application.routes.draw do
  resources :entrees
  root "game#index"
end
