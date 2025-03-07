import pandas as pd
import joblib
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load model and vectorizer
model = joblib.load("disease_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    symptoms = data["symptoms"]
    symptoms_vectorized = vectorizer.transform([symptoms])
    prediction = model.predict(symptoms_vectorized)
    return jsonify({"disease": prediction[0]})

if __name__ == "__main__":
    app.run(debug=True, port=5001)
