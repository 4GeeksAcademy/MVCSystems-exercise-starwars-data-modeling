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

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship , declarative_base
from sqlalchemy import create_engine
from eralchemy2 import render_er

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)
    favorite_characters = relationship("FavoriteCharacter", backref="user", lazy=True)
    favorite_planets = relationship("FavoritePlanet", backref="user", lazy=True)
    favorite_vehicles = relationship("FavoriteVehicle", backref="user", lazy=True)

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
    favorite_characters = relationship("FavoriteCharacter", backref="character", lazy=True)

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
    favorite_planets = relationship("FavoritePlanet", backref="planet", lazy=True)

class Vehicle(Base):
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
    favorite_vehicles = relationship("FavoriteVehicle", backref="vehicle", lazy=True)

class FavoriteEntity(Base):
    __abstract__ = True
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)

class FavoriteCharacter(FavoriteEntity):
    __tablename__ = 'favorite_character'
    character_id = Column(Integer, ForeignKey("character.id"), nullable=False)

class FavoritePlanet(FavoriteEntity):
    __tablename__ = 'favorite_planet'
    planet_id = Column(Integer, ForeignKey("planet.id"), nullable=False)

class FavoriteVehicle(FavoriteEntity):
    __tablename__ = 'favorite_vehicle'
    vehicle_id = Column(Integer, ForeignKey("vehicle.id"), nullable=False)

    def to_dict(self):
        return {}

## Draw from SQLAlchemy base
render_er(Base, 'diagram.png')