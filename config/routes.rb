Rails.application.routes.draw do

  namespace :api do
    resources :leagues do
      resources :teams do
        resources :players do
        end
      end
    end
  end


end
