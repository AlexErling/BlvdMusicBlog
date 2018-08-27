ActiveAdmin.register Post do
  permit_params :title, :body, :user_id, :post_type, :link, :post_name, :tag_list, :image, :slug, :url_slug
  scope_to :current_user, unless: proc {current_user.admin?}

  controller do
    def find_resource
      begin
      scoped_collection.where(slug: params[:id]).first!
      rescue ActiveRecord::RecordNotFound
      scoped_collection.find(params[:id])
      end
    end
  end

  form do |f|
    f.object.user = current_user
    f.inputs "Post Details" do
      if current_user.admin?
        f.input :user
      end
      f.input :post_type
      f.input :title, label: "Post Title"
      f.input :post_name, label: "Name", hint: "Name of Song, Video, Playlist, Event"
      f.input :body, as: :quill_editor
      f.input :link
      f.input :url_slug, label: "Slug (URL PATH)", hint: "Will be converted to friendly URL Slug"
      f.input :tag_list, label: "Tags (separated by commas)"
      f.input :image, hint: f.post.image? ? image_tag(f.post.image.url, height: '100') : content_tag(:span, "Upload JPG/PNG/GIF image")
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
      row :body
      row :link
      row :slug, label: "URL Link"
      list_row :tag_list
      image_row :image, style: :thumb

    end
  end

  filter :tags
  filter :admin_user
  filter :title
  filter :body
end
