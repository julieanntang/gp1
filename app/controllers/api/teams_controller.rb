class Api::TeamsController < ApplicationController
  before_action :find_league
  before_action :find_team, only: [:show, :update, :destroy]
  
  
  def index
    teams = @league.teams.all
    render json: teams
  end
  
  def show
    render json: @team
  end
  
  def create
    @team = @league.teams.new(team_params)
    if @team.save
      render json: @team
    else
      render json: {errors: @team.errors}, status: 422
    end
  end
  
    def update
      if @team.update(team_params)
        render json: @team
      else
        render json: {errors: @team.errors}, status: 422
      end
    end
  
    def destroy
      render json: @team.destroy
    end
  
    private
  
    def team_params
      params.require(:team).permit(:name, :location, :num)
    end
  
    def find_team 
      @team = @league.teams.find(params[:id])
    end
  
    def find_league
      @league = League.find(params[:league_id])
    end
  end