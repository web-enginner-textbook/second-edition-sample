require 'rails_helper'

RSpec.describe 'TodoTasksController', type: :request do
  describe 'GET /todo_tasks/{id}' do
    let(:todo_task) do
      ToDoTask.create(content: 'ゴミ捨て')
    end

    it '指定したTodoTaskが返されること' do
      get todo_task_path(id: todo_task.id)
      body = JSON.parse(response.body)
      expect(body).to include({ 'id' => todo_task.id, 'content' => todo_task.content })
    end
  end
end
