class TodoTasksController < ApplicationController
  def index
    todo_tasks = TodoTask.all
    render json: todo_tasks.map { |todo_task| todo_task.attributes }
  end

  def show
    todo_task = TodoTask.find(params[:id])
    render json: todo_task.attributes
  end

  def create
    TodoTask.create(todo_task_strong_parameters)
    render status: :created
  end

  def update
    todo_task = TodoTask.find(params[:id])
    todo_task.update(todo_task_strong_parameters)
    render json: todo_task.attributes
  end

  def destroy
    todo_task = TodoTask.find(params[:id])
    todo_task.destroy
    render status: :no_content
  end

  private

  def todo_task_strong_parameters
    params.require(:todo_task).permit(:content)
  end
end
