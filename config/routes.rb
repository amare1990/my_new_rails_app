Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    get 'greetings/random/message', to: 'greetings#random_message'
  end

end
