class WelcomeController < ApplicationController
  def index
    @todos = Todo.all
  end
end
