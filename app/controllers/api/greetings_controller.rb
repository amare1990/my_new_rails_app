class Api::GreetingsController < ApplicationController
  def random_message
    greeting = Greeting.find(rand(1..5)).message
    render json: { random_message: greeting }
  end
end
