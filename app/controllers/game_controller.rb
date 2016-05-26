class GameController < ApplicationController
  def index
    @entrant = Entry.new
  end
end
