class CreateLeagues < ActiveRecord::Migration[6.1]
  def change
    create_table :leagues do |t|
      t.string :name
      t.string :description
      t.string :country

      t.timestamps
    end
  end
end
