# 🩺 HealthBuddy – A Smart Health Management Platform

**HealthBuddy** is a full-stack health platform designed to provide intelligent, accessible, and supportive healthcare solutions. It combines machine learning-powered disease prediction with community-driven support, reminders, and more.

---

## 🔍 Features

### 1. Community Forum
- Registered users can:
  - Ask questions related to their health.
  - Tag questions by group (e.g., `Maternity`, `Senior Citizens`, `Working Professionals`).
  - Answer others' questions.

---

### 2. Disease Prediction with Health Recommendations
- Users input symptoms and receive:
  - 🧠 Predicted Disease (using trained SVC model)
  - 📋 Medical Description
  - ⚠️ Suggested Precautions
  - 💊 Medications
  - 🏃 Workout Tips
  - 🥗 Diet Plans

> Dataset Source: [Medicine Recommendation System – Kaggle](https://www.kaggle.com/datasets/noorsaeed/medicine-recommendation-system-dataset)  
> Model built using **scikit-learn (SVC)** and served via **Flask API**

---

### 3. Reminders for Medications & Appointments
- Users can schedule health-related reminders for : 
  - Medication timings
  - Doctor appointment schedules

---

### 4. Chatbot Assistant
- A Gemini AI-based chatbot integrated to assist users with common queries.
- Helpful for general health tips.

---

## 🛠️ Tech Stack

| Layer       | Tech                          |
|-------------|-------------------------------|
| Frontend    | React.js                      |
| Backend     | MERN (MongoDB, Express.js, Node.js) and Flask (Python)               |
| ML Model    | Scikit-learn (SVC)            |
| Styling     | CSS                           |
| AI Chatbot  | Gemini AI                     |

---

## 🗃️ Dataset Overview

The following CSV files power the model and recommendation engine:

| File Name              | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `Training.csv`         | Core training dataset mapping symptoms to diseases                         |
| `Symptom-severity.csv` | Severity scores for each symptom                                           |
| `symptoms_df.csv`      | One-hot encoded symptom columns                                            |
| `description.csv`      | Disease descriptions                                                       |
| `precautions_df.csv`   | Up to 4 precautions per disease                                            |
| `medications.csv`      | Medication recommendations                                                 |
| `diets.csv`            | Suggested diets                                                            |
| `workout_df.csv`       | Exercise and workout suggestions 

---

## 🚀 Getting Started (Local Setup)

1. **Backend Setup**
   ```bash
   conda activate MachineLearning
   pip install flask pandas numpy scikit-learn
   python main.py
   npm run server

2. **Frontend Setup**
   ```bash
   cd client
   npm install
   npm start
