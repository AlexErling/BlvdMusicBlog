ActiveAdmin.register ActsAsTaggableOn::Tag, as: "Tags" do
  permit_params :name
end
