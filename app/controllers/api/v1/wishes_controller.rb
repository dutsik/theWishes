class Api::V1::WishesController < ApplicationController


  def index
    @user = current_user
    @wishes = current_user.wishes.order(:orderNumber)
  end

  # TODO add category and due_at to create also for update
  def create
    @user = current_user
    @wishes_count = @user.wishes.count
    @wish = @user.wishes.create!(
        body: params[:body],
        orderNumber: ++@wishes_count )
    render :partial => "wish", :object => @wish
  end
  def show
    @wish =  Wish.find(params[:id])
    render :partial => "wish", :object => @wish
  end
  def update
    @wish = Wish.find(params[:id])

    p params



    @wish.update!(status: :active) if !params[:is_completed]
    @wish.update!(status: :finished) if params[:is_completed]
    @wish.update!(body: params[:title]) if params[:title]
    @wish.update!(due_date: params[:due_at]) if params[:due_at]
    @wish.update!(wish_category_id: params[:category][:id]) if params[:category]
    render :partial => "wish", :object => @wish
  end


end
