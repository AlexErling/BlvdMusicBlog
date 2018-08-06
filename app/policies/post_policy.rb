class PostPolicy
  attr_reader :user, :post

  def initialize(user, post)
    @post = post
    @user = user
  end

  def index?
    true
  end

  def show?
    true
  end

  def create?
    user.admin? || @post.user == user
  end

  def create?
    user.admin? || @post.user == user
  end

  def destroy?
    user.admin? || @post.user == user
  end

end
