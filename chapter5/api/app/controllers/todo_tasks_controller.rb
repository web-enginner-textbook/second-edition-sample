class TodoTasksController  < ApplicationController
  def index
    todo_tasks = TodoTask.all
    render json: {
      todo_tasks: todo_tasks.map do |todo_task|
        {
          id: todo_task.id,
          content: todo_task.content
        }
      end
    }
  end

  def create
    todo_task = TodoTask.create(content: todo_task_params[:content])
    render json: {
      todo_task: {
        id: todo_task.id,
        content: todo_task.content
      }
    }
  end

  def update
    todo_task = TodoTask.find(params[:id])
    todo_task.update(content: todo_task_params[:content])
    render json: {
      todo_task: {
        id: todo_task.id,
        content: todo_task.content
      }
    }
  end

  def destroy
    todo_task = TodoTask.find(params[:id])
    todo_task.destroy
    head :no_content
  end

  private

  def todo_task_params
    params.permit(:content)
  end
end