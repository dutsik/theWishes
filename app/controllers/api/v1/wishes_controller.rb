class Api::V1::WishesController < ApplicationController


  def index
    @user = current_user
    @wishes = current_user.wishes
  end
  def create
    @user = current_user
    @wishes_count = @user.wishes.count
    @wish = @user.wishes.create(body: params[:body], orderNumber: ++@wishes_count )
    render :partial => "wish", :object => @wish
  end
  def show
    @wish =  Wish.find(params[:id])
    render :partial => "wish", :object => @wish
  end
  def update
    @wish = Wish.find(params[:id])

    @wish.update!(status: :active) if !params[:is_completed]
    @wish.update!(status: :finished) if params[:is_completed]
    @wish.update!(body: params[:title]) if params[:title]
    render :partial => "wish", :object => @wish
  end


end
