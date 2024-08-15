# Objective
As a user, I can:
- add other users
- support different roles(admin/not admin)
- edit users
- remove users
- support basic validations(email/number uniqueness) 

# Setup

## Backend
Python/Django

dependencies:
- python: Python 3.12.0
- pip: 23.2.1
- npm: 10.2.4
- node: v20.11.0



### To get backend working:

from parent dir: take_home_iw_challenge/

```$ cd take_home_iw_challenge/```

Setup myenv
```
$ python -m venv myenv
$ source myenv/bin/activate
$ cd simple_team_member_management/
$ pip install -r requirements.txt
```

Setup Django
```
$ python manage.py makemigrations # this might not be needed as the migration file should already be present
$ python manage.py migrate
```

Run Django
```
$ python manage.py runserver => server will run on http://localhost:8000.
```

can verify server is working by visiting http://localhost:8000/api/users/


## Frontend
Javascript/React/Vite

To get frontend working:
```
$ cd "frontend" dir
$ npm install
$ npm run dev
```
the frontend server will run on http://localhost:5173

# Usage
team member actions
- view 
- add 
- update 
- delete 

# Member list
<img width="598" alt="image" src="https://github.com/user-attachments/assets/50f2d79a-7209-40bb-b58f-c39d882989cb">

# Member Add
<img width="600" alt="image" src="https://github.com/user-attachments/assets/56f0b4ee-baa5-4ce2-adaa-bda01fd20a5e">

# Member Edit
<img width="600" alt="image" src="https://github.com/user-attachments/assets/2825256a-99e8-4099-bcf1-d3bc37008e07">



