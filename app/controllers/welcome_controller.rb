class WelcomeController < ApplicationController
  def index
    @todos = Todo.where(user_id: current_user.id)
    @todo = Todo.new
  end
end
