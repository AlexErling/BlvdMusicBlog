ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation, :name, :admin
  menu :if => proc { current_user.admin? }
  actions :all, :except => [:destroy, :new]



  index do
    column :name
    column :email
    column :admin
  end

  form do |f|
    f.inputs do
      f.input :name
      f.input :email
      f.input :admin, label: "Admin"
      f.input :password
      f.input :password_confirmation
    end
      f.actions
  end

  filter :name


end
