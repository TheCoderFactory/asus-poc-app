class GameController < ApplicationController
  def index
    @entrant = Entree.new
  end
end
