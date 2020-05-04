class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:auth_check]

  def auth_check
    logger.debug("auth_check api is executed")
    if user_signed_in?
      render json: { message: "you are signed in"}
    else
      render json: { message: "You need to login"}
    end
  end

end
