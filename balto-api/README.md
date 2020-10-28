# Getting Started

## Development ENV SETUP
- Make sure python 3.7.0 is installed on your machine
- MySQL connection is stable with 3.7.0 and below

## Running Development
- Create a virtual environment ```python3 -m venv venv```
- Activate the virtual environment with ```venv\Scripts\activate```
- Install dependencies with ```pip install -r requirements.txt```
- On Windows command prompt, use ``` set FLASK_ENV=development```
- Type ```flask run```

## Database Connections
- In the app.py file, you will see this block of code
```
app.config['MYSQL_USER'] = '';
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_HOST'] = '';
app.config['MYSQL_DB'] = ''
app.config['MYSQL_CURSORCLASS'] = ''
mysql = MySQL(app)
```
- Fill this information out with your MySQL database configurations
Example:

```
app.config['MYSQL_USER'] = 'root';
app.config['MYSQL_PASSWORD'] = 'p@$$w0rd'
app.config['MYSQL_HOST'] = '127.0.0.1';
app.config['MYSQL_DB'] = 'moviesdb'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)
```
