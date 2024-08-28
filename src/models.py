# import os
# import sys
# from sqlalchemy import Column, ForeignKey, Integer, String
# from sqlalchemy.orm import relationship, declarative_base
# from sqlalchemy import create_engine
# from eralchemy2 import render_er

# Base = declarative_base()

# class Person(Base):
#     __tablename__ = 'person'
#     # Here we define columns for the table person
#     # Notice that each column is also a normal Python instance attribute.
#     id = Column(Integer, primary_key=True)
#     name = Column(String(250), nullable=False)

# class Address(Base):
#     __tablename__ = 'address'
#     # Here we define columns for the table address.
#     # Notice that each column is also a normal Python instance attribute.
#     id = Column(Integer, primary_key=True)
#     street_name = Column(String(250))
#     street_number = Column(String(250))
#     post_code = Column(String(250), nullable=False)
#     person_id = Column(Integer, ForeignKey('person.id'))
#     person = relationship(Person)

#     def to_dict(self):
#         return {}

# ## Draw from SQLAlchemy base
# render_er(Base, 'diagram.png')

import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import create_engine
from eralchemy2 import render_er

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)
    favorite_character = relationship("Favorite_Character", backref = "user", lazy=True)
    favorite_planet = relationship("Favorite_Planet", backref = "user", lazy=True)
    favorite_vehicle = relationship("Favorite_Vehicle", backref = "user", lazy=True)

class Character(Base):
    __tablename__ = 'character'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    height = Column(Integer, nullable=False)
    mass = Column(Integer, nullable=False)
    hair_color = Column(String(50), nullable=False)
    skin_color = Column(String(50), nullable=False)
    eye_color = Column(String(50), nullable=False)
    gender = Column(String(50), nullable=False)
    favorite_character = relationship("Favorite_Character", backref = "character", lazy=True)

class Planet(Base):
    __tablename__ = 'planet'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    climate = Column(String(50), nullable=False)
    diameter = Column(Integer, nullable=False)
    gravity = Column(Integer, nullable=False)
    orbital_period = Column(Integer, nullable=False)
    population = Column(Integer, nullable=False)
    rotation_period = Column(Integer, nullable=False)
    surface_water = Column(Integer, nullable=False)
    terrain = Column(String(50), nullable=False)
    favorite_planet = relationship("Favorite_Planet", backref = "planet", lazy=True)

class Vehicles(Base):
    __tablename__ = 'vehicle'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    model = Column(String(50), nullable=False)
    cargo_capacity = Column(Integer, nullable=False)
    consumables = Column(String(50), nullable=False)
    cost_in_credits = Column(Integer, nullable=False)
    vehicle_class = Column(String(50), nullable=False)
    manufacturer = Column(String(50), nullable=False)
    passengers = Column(Integer, nullable=False)
    favorite_vehicle = relationship("Favorite_Vehicle", backref = "vehicle", lazy=True)

class Favorite_Character(Base):
    __tablename__ = 'favorite_character'
    id = Column(Integer, primary_key=True)
    character_id = Column(Integer, ForeignKey("character.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)

class Favorite_Planet(Base):
    __tablename__ = 'favorite_planet'
    id = Column(Integer, primary_key=True)
    planet_id = Column(Integer, ForeignKey("planet.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)

class Favorite_Vehicle(Base):
    __tablename__ = 'favorite_vehicle'
    id = Column(Integer, primary_key=True)
    vehicle_id = Column(Integer, ForeignKey("vehicle.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)

    def to_dict(self):
        return {}
  

## Draw from SQLAlchemy base
render_er(Base, 'diagram.png')