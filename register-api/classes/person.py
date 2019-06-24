class Person:
  def __init__(self, name, email, password):
    self.name = name
    self.email = email
    self.password = password

  def to_json(self):
    return {
      "name": self.name,
      "email": self.email,
      "password": self.password
    }