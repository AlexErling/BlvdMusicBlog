ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation, :name, :admin, :avatar, :bio, :location
  scope_to :current_user, unless: proc {current_user.admin?}
  actions :all, :except => [:destroy, :new]



  index do
    column :name
    column :email
    column :admin
    column :location
    image_column :avatar, style: :thumb
    actions
  end

  form do |f|
    f.inputs do
      f.input :name
      f.input :email
      f.input :bio
      f.input :location
      f.input :admin, label: "Admin"
      f.input :password
      f.input :password_confirmation
      f.input :avatar
    end
      f.actions
  end

  filter :name


end
