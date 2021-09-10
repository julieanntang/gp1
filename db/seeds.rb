# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

League.destroy_all

l = League.create(name: "World Soccer League", description: "The best soccer league in the world!", country: "International")

require "faker"

10.times do
  t = l.teams.create(name: Faker::Sports::Football.team, location: Faker::Address.city, num: 10)
  10.times do
    t.players.create(name: Faker::Sports::Football.player, position: Faker::Sports::Football.position, number: Faker::Number.between(from: 0, to: 99))
  end
end