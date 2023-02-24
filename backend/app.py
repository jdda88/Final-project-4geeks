from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_session import Session
from config import ApplicationConfig
from models import db, User
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)
app.config.from_object(ApplicationConfig)
jwt = JWTManager(app)
cors = CORS(app, supports_credentials=True)
bcrypt = Bcrypt(app)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/@me")
@cross_origin(supports_credentials=True)
@jwt_required()
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email,
        "username": user.username,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "country": user.country,
        "state": user.state,
        "city": user.city,
        "address": user.address,
        "zipcode": user.zipcode,
    })

@app.route("/register", methods=["POST"])
@cross_origin(supports_credentials=True)
def register_user():
    username = request.json["username"]
    email = request.json["email"]
    password = request.json["password"]
    first_name = request.json["first_name"]
    last_name = request.json["last_name"]
    country = request.json["country"]
    state = request.json["state"]
    city = request.json["city"]
    address = request.json["address"]
    zipcode = request.json["zipcode"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password,username=username,first_name=first_name,last_name=last_name,country=country,state=state,city=city,address=address,zipcode=zipcode)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email,
        "username": new_user.username,
        "first_name": new_user.first_name,
        "last_name": new_user.last_name,
        "country": new_user.country,
        "state": new_user.state,
        "city": new_user.city,
        "address": new_user.address,
        "zipcode": new_user.zipcode,

    })


@app.route("/login", methods=["POST"])
@cross_origin(supports_credentials=True)
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Access denied. Please verify your username and password and try again"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Access denied. Please verify your username and password and try again"}), 401

    session["user_id"] = user.id
    token = create_access_token(identity = user.id)
    return jsonify({
        "id": user.id,
        "email": user.email,
        "token" : token,
    })


@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"


if __name__ == "__main__":
    app.run(debug=True)
