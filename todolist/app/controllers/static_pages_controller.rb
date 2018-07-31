class StaticPagesController < ApplicationController
  def root
    # render html: '<div id="content"></div>'.html_safe
    render :root
  end
end
