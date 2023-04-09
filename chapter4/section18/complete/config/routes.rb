Rails.application.routes.draw do
  resources :todo_tasks
  get '/sample_todo_tasks', to: 'sample_to_do_tasks#index'
end
