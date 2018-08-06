class PostsController < ApiController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    if params[:tag]
      @posts = Post.tagged_with(params[:tag])
    else
      @posts = Post.all
    end
    authorize @posts
    render :json => @posts
  end

  def show
    @post
    authorize @post
    render :json => @post

  end

  def create
    @post = Post.new(post_params)
    authorize @post
  end

  def update
    @post.update(post_params)
    authorize @post
    head :no_content
  end

  def destroy
    @post.destroy
    authorize @post
    head :no_content
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :song_title, :post_type, :user_id, :link, :tag_list)
  end

  def set_post
    @post = Post.find(params[:id])
  end
end
