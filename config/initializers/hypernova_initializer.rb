require 'hypernova'
require 'hypernova/plugins/development_mode_plugin'

Hypernova.add_plugin!(DevelopmentModePlugin.new)

Hypernova.configure do |config|
  config.host = "localhost"
  config.port = 3030            # The port where the node service is listening
end