ActiveAdmin.register Post do
  permit_params :title, :body, :admin_user_id, :post_type, :link, :song_title, :tag_ids => []


  form do |f|
    f.inputs "Post Details" do
      f.input :admin_user
      f.input :post_type
      f.input :title
      f.input :song_title
      f.input :body
      f.input :link
      f.input :tags
    end
    f.actions
  end
end
