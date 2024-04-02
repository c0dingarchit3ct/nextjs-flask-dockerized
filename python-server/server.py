# File: app.py
from flask import Flask, render_template, request, jsonify
from flask_cors import cross_origin
import json


app = Flask(__name__,
            template_folder='templates')

#create a route to find API's
@app.route('/whichapi')
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def apilist():
    # render the templates apilist.html
    # get query parameters
    #print all the query parameters
    app.logger.debug ("Query parameters: ")
    app.logger.debug (json.dumps(request.args, indent=4,default=str))
    ret = ["api1", "api2", "api3"]
    # return the ret list as a json
    return jsonify(ret)

@app.route('/')
def home():
    # render the templates index.html
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True,
            host='0.0.0.0',
            port=5001)