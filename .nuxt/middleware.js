const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['class'] = require('..\\middleware\\class.js')
middleware['class'] = middleware['class'].default || middleware['class']

export default middleware
