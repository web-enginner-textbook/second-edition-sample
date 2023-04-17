Rails.application.routes.draw do
  resources :todo_tasks, only: %i[index create update destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
