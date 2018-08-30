class ContactController < ApiController

  def create
    @contact = Contact.new(params[:contact])
    name = params[:contact][:name]
    puts @contact
    @contact.request = request
    if @contact.deliver
      render json: {message: "#{name.capitalize}, thank you for your email! We will get back to you as soon as possible!"}
    else
      render json: {message: 'Error, the message did not send. Please try again.'}
    end
  end

end
