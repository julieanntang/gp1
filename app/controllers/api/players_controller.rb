class Api::PlayersController < ApplicationController

  before_action :find_league
  before_action :find_team 
  before_action :find_player, only: [:destroy, :update, :show] 
  
  def index
    # render json: Player.all
    render json: {league: @league, team: @team, player: @team.players}
  end

  def show
    render json: @player
  end

  def create
    @player = Player.new(team_params)
    if @player.save
      render json: @player
    else
      # render json: {errors: @player.errors}, status: 422
    end
  end

  def update
    if @player.update(team_params)
      render json: @player
    else
      # render json: {errors: @player.errors}, status: 422
    end
  end

  def destroy
    @player.destroy
    render json: @player
  end

  private

  def player_params
    params.require(:player).permit(:name, :position, :number)
  end

  def find_league
    @league = League.find(params[:league_id])
  end
  
  def find_team 
    @team = @league.teams.find(params[:team_id])
  end
  
  def find_player
    @player = Player.find(params[:id])
  end

end
