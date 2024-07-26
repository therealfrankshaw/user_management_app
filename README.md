# take_home_iw_challenge
take home challenge

# Setup

## Backend
Python/Django

dependencies:
python: Python 3.12.0
pip: 23.2.1
npm: 10.2.4
node: v20.11.0



### To get backend working:

from parent dir: take_home_iw_challenge/
$ cd take_home_iw_challenge/
Setup myenv
$ python -m venv myenv
$ source myenv/bin/activate
$ cd simple_team_member_management/
$ pip install -r requirements.txt

Setup Django
$ python manage.py makemigrations # this might not be needed as the migration file should already be present
$ python manage.py migrate

Run Django
$ python manage.py runserver => server will run on http://localhost:8000.

can verify server is working by visiting http://localhost:8000/api/users/


## Frontend
Javascript/React/Vite

To get frontend working:
$ cd "frontend" dir
$ npm install
$ npm run dev

the frontend server will run on http://localhost:5173

# Usage
team member actions
- view 
- add 
- update 
- delete 
