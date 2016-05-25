class EntreesController < ApplicationController
  respond_to :html
  before_action :authenticate_user!, only: ["index"]

  def index
    @entrants = Entree.all.paginate(:page => params[:page], :per_page => 10)

    respond_to do |format|
      format.html
      format.csv { send_data @entrants.to_csv, filename: "entrants-#{Date.today}.csv" }
    end
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
