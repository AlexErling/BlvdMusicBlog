# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(email: 'alexerling@gmail.com', name: "Alex Erling", admin: true, password: 'password', password_confirmation: 'password')
User.create!(email: 'nickkellersmu@gmail.com', name: "Nick Keller", admin: true, password: 'password', password_confirmation: 'password')
User.create!(email: 'ryanmessick@icloud.com', name: "Ryan Messick", admin: true, password: 'password', password_confirmation: 'password')
