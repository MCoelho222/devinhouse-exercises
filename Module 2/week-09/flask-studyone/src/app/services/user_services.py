from src.app.models.user import User, user_share_schema
from src.app.models.roles import Role
from src.app.utils import generate_jwt
from datetime import datetime, timedelta


def create_user(city_id, name, age, email, password, roles = 'HELPER'):
    try:
        roles_query = Role.query.filter_by(description = roles).all()

        User.seed(
            city_id,
            name, 
            age,
            email,
            password,
            roles_query
        )
        return {'message': 'Usuário foi criado com sucesso'}
    except:
        return {'error': 'Algo deu errado'}

def login_user(email, password):
    try:
        user_query = User.query.filter_by(email=email).first_or_404()
        user_dict = user_share_schema.dump(user_query)


        if not user_query.check_password(password):
            return {'error': 'Suas credenciais estão incorretas', 'status_code': 401}

        payload = {
            'user_id': user_query.id,
            'exp': datetime.utcnow() + timedelta(days=1),
            'roles': user_dict['roles']
        }

        token = generate_jwt(payload)
        return {'token': token}
    except:
        return {'error': 'Algo deu errado', 'status_code': 500}
