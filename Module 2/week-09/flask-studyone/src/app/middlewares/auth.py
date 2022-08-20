from functools import wraps
from jwt import decode
from flask import current_app, request, jsonify

from src.app.models.user import User

# def jwt_required(function_current):
#     @wraps(function_current)
#     def wrapper(*args, **kwargs):
        
#         token = None

#         if 'Authorization' in request.headers:
#             token = request.headers['Authorization']

#         if not token:
#             return jsonify({'error': 'Você não tem permissão'}), 403

#         if not 'Bearer' in token:
#             return jsonify({'error': 'Você não tem permissão'}), 403
        
#         try:
#             token_pure = token.replace('Bearer ', '')
#             decoded = decode(token_pure, current_app.config['SECRET_KEY'], 'HS256')
#             current_user = User.query.get(decoded['user_id'])
#         except:
#             return jsonify({'error': 'Você não tem permissão'}), 403
#         return function_current(current_user=current_user*args, **kwargs)

#     return wrapper

def requires_access(permission):
    def jwt_required(function_current):
        @wraps(function_current)
        def wrapper(*args, **kwargs):
            
            token = None

            if 'Authorization' in request.headers:
                token = request.headers['Authorization']

            if not token:
                return jsonify({'error': 'Você não tem permissão'}), 403

            if not 'Bearer' in token:
                return jsonify({'error': 'Você não tem permissão'}), 403
            
            try:
                token_pure = token.replace('Bearer ', '')
                decoded = decode(token_pure, current_app.config['SECRET_KEY'], 'HS256')
                current_user = User.query.get(decoded['user_id'])
            except:
                return jsonify({'error': 'Você não tem permissão'}), 403
            
            found_permission = 0

            for role in current_user.roles:
                for permission_in_roles in role.permissions:
                    if permission_in_roles.description == permission:
                        found_permission += 1
            if found_permission == 0:
                return jsonify({"error": "O token é inválido"})
            
            return function_current(current_user=current_user*args, **kwargs)
        
        return wrapper
    return jwt_required

