ActiveAdmin.register Post do
  permit_params :title, :body, :user_id, :post_type, :link, :song_title, :tag_list, :image
  scope_to :current_user, unless: proc {current_user.admin?}

  form do |f|
    f.object.user = current_user
    f.inputs "Post Details" do
      if current_user.admin?
        f.input :user
      end
      f.input :post_type
      f.input :title
      f.input :song_title
      f.input :body, as: :quill_editor
      f.input :link, as: :quill_editor
      f.input :tag_list, label: "Tags", as: :tags
      f.input :image
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
    column "Post by:", :user
    column  "Tags", :tag_list
    image_column :image, style: :thumb
    actions
  end

  show do
    attributes_table do
      row :user
      row :post_type
      row :title
      row :song_title
      row :body
      row :link
      list_row :tag_list
      image_row :image, style: :large

    end
  end

  filter :tags
  filter :admin_user
  filter :title
  filter :body
end
