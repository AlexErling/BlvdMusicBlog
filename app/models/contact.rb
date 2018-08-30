class Contact < MailForm::Base

  attribute :name, :validate => true
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :body, :validate => true

  def headers
    {
      :subject => "Contact Inquiry",
      :to => "thisisthesongblog@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end

end
