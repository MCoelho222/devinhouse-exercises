from src.app.models.developers import Developers, developers_share_schema
from src.app.models.user import User


def list_all_developers():

    list_developers = Developers.query.join(User, Developers.user_id == User.id).all()
    # list_developers = Developers.query.join(User).all()
    list_developers_dict = developers_share_schema.dump(list_developers)
    return list_developers_dict

def list_all_developers_service():

  list_developers = Developers.query.all()
  list_developers_dict = developers_share_schema.dump(list_developers)


  return list_developers_dict