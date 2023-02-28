from flask import Flask,render_template,request, jsonify
from werkzeug.utils import secure_filename
import os




app=Flask(__name__)

app.config['UPLOAD_FOLDER'] = 'uploads'



@app.route('/',methods=['POST','GET'])
def home():
    return render_template('app.html')


@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    return render_template('upload.html', filename=filename)










if __name__=="__main__":
    app.run(debug=True)