class CreateTodoTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :todo_tasks do |t|
      t.string :content

      t.timestamps
    end
  end
end
