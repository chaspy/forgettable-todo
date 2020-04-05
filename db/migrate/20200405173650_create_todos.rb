class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.string :description
      t.integer :user_id
      t.bool :finished

      t.timestamps
    end
  end
end
