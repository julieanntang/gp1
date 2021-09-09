class Api::LeaguesController < ApplicationController


  def index
    leagues = League.all
    render json: leagues
  end
  
  def show
    league = League.find(params[:id])
    render json: league
  end
  
  def create
    league = League.new(league_params)
    if league.save
      render json: league
    else
      render json: {errors: league.errors}
    end
  end
  
    def update
      league = League.find(params[:id])
      if league.update(league_params)
        render json: league
      else
        render json: {errors: league.errors}
      end
    end
  
    def destroy
      league = League.find(params[:id])
      league.destroy
  
      render json: league
    else
      render json: {errors: league.errors}, status 422
    end
  
    private
  
    def league_params
      params.require(:league).permit(:name, :description, :country)
    end
  
  
  
end
