class SampleTodoTasksController < ApplicationController
  def index
    render json: [
      { content: 'sample_task1' }, { content: 'sample_task2' }
    ]
  end
end
