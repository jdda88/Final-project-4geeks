from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__= 'user'
    id = db.Column(db.String(120), primary_key=True, unique=True, default=get_uuid)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)
    first_name = db.Column(db.String(120), unique=False)
    last_name = db.Column(db.String(120), unique=False)
    country = db.Column(db.String(30), unique=False)
    state = db.Column(db.String(30), unique=False)
    city = db.Column(db.String(30), unique=False)
    address = db.Column(db.String(30), unique=False)
    zipcode = db.Column(db.String(30), unique=False)
    password = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "country": self.country,
            "state": self.state,
            "city": self.city,
            "address": self.address,
            "zipcode": self.zipcode,
            "password": self.password,
        }


class Orders(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.String(120), primary_key=True)
    purchase_date = db.Column(db.Integer, nullable=False)
    confirmation_number = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<Orders %r>' % self.purchase_date

    def serialize(self):
        return {
            "id": self.id,
            "purchase_date": self.purchase_date,
            "confirmation_number": self.confirmation_number,
        }

class Products(db.Model):
    __tablename__= 'products'
    id = db.Column(db.String(120), primary_key=True)
    product_name = db.Column(db.String(30), unique=True, nullable=True)
    description = db.Column(db.String(250), unique=True, nullable=True)
    price = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return '<Products %r>' % self.product_name

    def serialize(self):
        return {
            "id": self.id,
            "product_name": self.product_name,
            "price": self.price,
            "description": self.description,
        }