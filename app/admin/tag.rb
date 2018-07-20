ActiveAdmin.register ActsAsTaggableOn::Tag, as: "Tags" do
  permit_params :name

  index do
    column "Tags", :name
    actions
  end

  filter :name
  config.comments = false
end
