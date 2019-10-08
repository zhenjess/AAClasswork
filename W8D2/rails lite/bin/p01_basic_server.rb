require 'byebug'
require 'rack'
# Rack::Server.start(
#   app: Proc.new do |env|
#     ['200', {'Content-Type' => 'text/html'}, ['hello world']]
#   end
# )

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'

#   res.write(env["REQUEST_PATH"])
    res.write(req.path)
  res.finish
end



Rack::Server.start(
  app: app,
  Port: 3000
)

# def execute
#     if req.path == '/i/love/app/academy'
#         render_content("i love app academy!")
#     end
# end
