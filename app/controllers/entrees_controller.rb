class EntreesController < ApplicationController
  def index
    @entrants = Entree.all
  end

  def new
    @entrant = Entree.new
  end

  def create
    @entrant = Entree.new(entree_params)
    if @entrannt.save
      redirect_to root
    else
      respond_with @entrant
    end
  end

  private
  def entree_params
    params.require(:entree).permit(:first_name, :last_name, :email, :phone)
  end
end
