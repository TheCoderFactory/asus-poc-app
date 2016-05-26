class EntriesController < ApplicationController
  respond_to :html
  before_action :authenticate_user!, only: ["index"]

  def index
    @entrants = Entry.all.paginate(:page => params[:page], :per_page => 10)
    @csv_entrants = Entry.all

    respond_to do |format|
      format.html
      format.csv { send_data @csv_entrants.to_csv, filename: "entrants-#{Date.today}.csv" }
    end
  end

  def new
    @entrant = Entry.new
  end

  def create
    puts params
    @entrant = Entry.create(entree_params)
    if @entrant.save
      redirect_to "/"
    else
      respond_with(@entrant)
    end
  end

  def destroy
    @entrant = Entry.find(params[:id])
    @entrant.destroy
    redirect_to :back
  end

  private
  def entree_params
    params.require(:entry).permit(:first_name, :last_name, :email, :phone, :school_or_business, :know_more, :city)
  end
end
