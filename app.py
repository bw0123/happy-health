from flask import Flask, render_template
from views import views

app = Flask(__name__)
app.register_blueprint(views, url_prefix="/") # routing in views.py

if __name__ == "__main__":
    app.run(debug=True, port=5000)