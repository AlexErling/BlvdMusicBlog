source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.0'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 3.11'
gem 'bootsnap', '>= 1.1.0', require: false
#ActiveAdmin
gem 'devise'
gem 'activeadmin'
gem 'activeadmin_addons'
gem 'jquery-rails'
gem 'active_skin'

#Getting SCSS to work
gem 'sass-rails'
gem 'uglifier'
gem 'coffee-rails'

#jsonResponse
gem 'active_model_serializers'


gem "paperclip", "~> 6.0.0"


#Tagging
gem 'acts-as-taggable-on', '~> 6.0'

gem 'pundit'

group :test do
  gem 'factory_bot_rails', '~> 4.0'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'faker'
  gem 'database_cleaner'
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 3.7'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
