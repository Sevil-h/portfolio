Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/portfolio', to: 'pages#portfolio'
  get '/mistercocktails', to: 'pages#mistercocktails'
  get '/bookarts', to: 'pages#bookarts'
  get '/galata', to: 'pages#galata'
end
