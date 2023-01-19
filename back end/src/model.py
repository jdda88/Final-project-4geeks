from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    username = db.Column(db.String(80), unique=True, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=True)
    first_name = db.Column(db.String(120), unique=False, nullable=True)
    last_name = db.Column(db.String(120), unique=False, nullable=True)
    isAdmin = db.Column(db.Boolean, default=False)
    country = db.Column(db.String(30), unique=False, nullable=True)
    state = db.Column(db.String(30), unique=False, nullable=True)
    city = db.Column(db.String(30), unique=False, nullable=True)
    address = db.Column(db.String(30), unique=False, nullable=True)
    zipcode = db.Column(db.String(30), unique=False, nullable=True)
    password = db.Column(db.String(120))

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "isAdmin": self.isAdmin,
            "country": self.country,
            "state": self.state,
            "city": self.city,
            "address": self.address,
            "zipcode": self.zipcode,
            "password": self.password,
            "product_id": self.product_id
        }


class Orders(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True)
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
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(30), unique=True, nullable=True)
    description = db.Column(db.String(250), unique=True, nullable=True)
    price = db.Column(db.Integer, unique=True, nullable=False)
    user = db.Relationship("User", backref=db.backref('products', lazy=True))

    def __repr__(self):
        return '<Products %r>' % self.plan_name

    def serialize(self):
        return {
            "id": self.id,
            "product_name": self.plan_name,
            "price": self.price,
            "description": self.description
        }