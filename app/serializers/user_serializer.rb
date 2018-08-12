class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :bio, :location
end
