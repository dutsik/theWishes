class Api::V1::WishCategoriesController < ApplicationController

  def index

    @wish_categories = WishCategory.all
    render json: @wish_categories
  end
end
