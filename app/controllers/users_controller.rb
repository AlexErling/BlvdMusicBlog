class UsersController < ApiController
  before_action :set_user, only: [:show]
  
  def index
    @users = User.all
    render :json => @users
  end

  def show
    @user
    render :json => @user
  end

  def set_user
    @user = User.friendly.find(params[:id])
  end
end
