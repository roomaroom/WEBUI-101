MuseumMs::Application.routes.draw do

  resources :tags

  scope :admin do
    resources :exhibits
    devise_for :users
  end

  root 'admin_pages#index'

end
