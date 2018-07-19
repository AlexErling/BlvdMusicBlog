class PostsController < ApiController
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    @posts = Post.all
    render :json => @posts
  end

  def show
    @post
    render :json => @post
  end

  def create
    @post = Post.new(post_params)
    render :json => @post, status => :ok
  end

  def update
    @post.update(post_params)
    head :no_content
  end

  def destroy
    @post.destroy
    head :no_content
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :song_title, :post_type, :admin_user_id, :link)
  end

  def set_post
    @post = Post.find(params[:id])
  end

end
