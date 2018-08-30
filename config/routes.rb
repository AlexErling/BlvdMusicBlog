Rails.application.routes.draw do
  get 'slug_controller/show'
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :posts
    get '/search', to: 'posts#search'
    get '/user_posts', to: 'posts#user_search'
    resources :users, only: [:index, :show]
    get 'tags/:tag', to: 'posts#index', as: "tag"
    resources :contact, only: [:create]
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
