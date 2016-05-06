class EntreesController < ApplicationController
  respond_to :html

  def index
    @entrants = Entree.all.paginate(:page => params[:page], :per_page => 10)
  end

  def new
    @entrant = Entree.new
  end

  def create
    puts params
    @entrant = Entree.create(entree_params)
    if @entrant.save
      redirect_to "/"
    else
      respond_with(@entrant)
    end
  end

  def destroy
    @entrant = Entree.find(params[:id])
    @entrant.destroy
    redirect_to :back
  end

  private
  def entree_params
    params.require(:entree).permit(:first_name, :last_name, :email, :phone, :school_or_business, :know_more)
  end
end
