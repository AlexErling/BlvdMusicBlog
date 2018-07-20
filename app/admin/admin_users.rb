ActiveAdmin.register AdminUser do
  permit_params :email, :password, :password_confirmation, :name


  index do
    column :email
    column :name
    actions
  end

  form do |f|
    f.inputs do
      f.input :name
      f.input :email
      f.input :password
      f.input :password_confirmation
    end
      f.actions
  end

  filter :name

end
