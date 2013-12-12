class SearchController < ApplicationController
  before_filter :prepend_view_paths

  def index
    if params[:q]
      @search = []
      searchable_models.each do |model|
        query = model.search { fulltext params[:q] }
        @search << query if query.results.any?
      end
    end
    binding.pry
  end

  private

    def searchable_models
      ActiveRecord::Base.connection.tables.map{|x| x.classify.safe_constantize}.compact.select(&:searchable?)
    end

    def prepend_view_paths
      prepend_view_path "#{Rails.root}/app/views/search"
    end
end

