from flask import Flask, render_template, request, redirect, url_for, jsonify, session

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/aboutUs")
def about_us():
    return render_template("aboutUs.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")