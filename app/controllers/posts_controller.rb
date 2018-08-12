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
    render :json => @posts.order('created_at DESC')
  end

  def show
    @post
    authorize @post
    render :json => @post

  end

  def create
    @post = Post.new(post_params)
    @post.created_at.to_date
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
    params.require(:post).permit(:title, :body, :song_title, :post_type, :user_id, :link, :tag_list, :image)
  end

  def set_post
    @post = Post.find(params[:id])
  end

  def created_at
    attributes['created_at'].strftime("%m/%d/%Y %H:%M")
  end
end
