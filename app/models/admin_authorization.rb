class AdminAuthorization < ActiveAdmin::AuthorizationAdapter

  def authorized?(action, subject = nil)
    if user.admin_level == "super"
      return true
    else
     return false
   end
 end


end
