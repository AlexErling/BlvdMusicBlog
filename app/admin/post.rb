ActiveAdmin.register Post do
  permit_params :title, :body, :admin_user_id, :post_type, :link, :song_title

end
