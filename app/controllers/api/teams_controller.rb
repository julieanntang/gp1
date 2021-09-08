class Api::TeamsController < ApplicationController

def index
  teams = Team.all
  render json: teams
end

def show
  team = League.find(params[:id])
  render json: team
end

def create
  team = Team.new(team_params)
  if team.save
    render json: team
  else
    render json: {errors: team.errors}, status 422
  end
end

  def update
    team = Team.find(params[:id])
    if team.update(team_params)
      render json: team
    else
      render json: {errors: team.errors}, status 422
    end
  end

  def destroy
    team = Team.find(params[:id])
    team.destroy

    render json: team
  end

  private

  def team_params
    params.require(:team).permit(:name, :location, :num)
  end

  def find_team 
    @team = Team.find(params[:id])
  end

  def find_league
    @league = League.find(params[:league_id])
  end
end
