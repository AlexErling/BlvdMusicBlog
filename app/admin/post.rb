ActiveAdmin.register Post do
  permit_params :title, :body, :admin_user_id, :post_type, :link, :song_title, :tag_list


  form do |f|
    f.inputs "Post Details" do
      f.input :admin_user
      f.input :post_type
      f.input :title
      f.input :song_title
      f.input :body
      f.input :link
      f.input :tag_list, label: "Tags"
      # f.input :image, as: :file
    end
    f.actions
  end

  index do
    selectable_column
    column :id
    column :title
    column :post_type
    column :created_at
    column "Post by:", :admin_user
    column  "Tags", :tag_list
    # column :image do |post|
    #   image_tag url_for(post.image), class: 'thumbnail'
    # end
    actions
  end

  show do
    attributes_table do
      row :admin_user
      row :post_type
      row :title
      row :song_title
      row :body
      row :link
      list_row :tag_list
      # row :image do |post|
      #   image_tag url_for(post.image), class: 'large'
      # end
    end
  end


  filter :tags
  filter :admin_user
  filter :title
  filter :body
end
