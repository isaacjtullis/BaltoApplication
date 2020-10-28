from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import cross_origin
import pandas as pd

app = Flask(__name__)

app.config['MYSQL_USER'] = '';
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_HOST'] = '';
app.config['MYSQL_DB'] = ''
app.config['MYSQL_CURSORCLASS'] = ''
mysql = MySQL(app)

@app.route('/', methods=["GET", "POST"])
@cross_origin()
def index():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute('''SELECT * FROM movies''')
        response = cur.fetchall()
        return jsonify(response)
    mycursor = mysql.connection.cursor()
    req = request.get_json()
    sql = "INSERT INTO movies (ReleaseYear, Title, Ethnicity, Director, Cast, Genre, WikiPage, Plot) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    value = list(req.values())
    values = tuple(value)
    try:
        response = mycursor.execute(sql, values)
        mysql.connection.commit()
    except e:
        print("ERROR", e)
    return 'success'

@app.route('/<id>', methods=['DELETE'])
@cross_origin()
def deleteFile(id):
    mycursor = mysql.connection.cursor()
    mycursor.execute("DELETE FROM movies WHERE id = %s", (id,))
    mysql.connection.commit()
    return 'success!'

# Get the uploaded files
@app.route("/uploadFile", methods=['POST'])
@cross_origin()
def uploadFiles():
      uploaded_file = request.files['file']
      print('uploaded file:', uploaded_file)
      parseCSV(uploaded_file)
      return 'success'

def parseCSV(filePath):
    mycursor = mysql.connection.cursor()
    col_names = ['Release Year','Title','Origin/Ethnicity','Director','Cast','Genre','Wiki Page','Plot']
    csvData = pd.read_csv(filePath, keep_default_na=False, names=col_names, header=None)
    for i,row in csvData.iterrows():
        sql = "INSERT INTO movies (ReleaseYear, Title, Ethnicity, Director, Cast, Genre, WikiPage, Plot) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        value = (row['Release Year'],row['Title'],row['Origin/Ethnicity'],row['Director'],row['Cast'],row['Genre'], row['Wiki Page'], row['Plot'])
        print('value:', value)
        mycursor.execute(sql, value)
        mysql.connection.commit()
