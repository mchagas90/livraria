class PagesController < ApplicationController
  around_filter :hypernova_render_support

  def welcome
  end
end
