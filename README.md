# 💪 Muscle Map  
### *An interactive visual guide to human muscles + targeted exercises*  

[Live Demo:](https://muscle-map-og.vercel.app/)

---

## 🚀 Overview

**Muscle Map** is a React application designed to help users explore human anatomy and learn exercises targeting specific muscle groups.  
Each page features:

- 📌 A high-quality muscle image  
- 📘 A clear scientific description  
- 🏋️ Exercises organized by *muscle subgroups* (e.g., long head vs short head)  
- 🔁 A reusable page architecture so new muscles can be added easily  

Built with an emphasis on **component reusability**, **clean CSS layout**, and **intuitive navigation**.

---

## ✨ Key Features

### 🔗 Dynamic Frontend Architecture
- Fast dev environment using **React + Vite**
- Multi-page structure using **React Router**
- Modular component design with reusable templates

### 🎨 Modern UI / UX
- Built from scratch with **CSS Grid and Flexbox**
- Clean split layouts (image left, description right)
- Simple, readable scrolling experience
- Mobile-friendly foundations

### 🏷️ Structured Exercise Data
- Exercises categorized by muscle head / subgroup
- Bullet-style lists with cues and images
- Easily expandable for complex groups (legs, abs, etc.)

 peep the browser titles to see some implementation of useEffect ;)

---

## 🧱 Tech Stack

| Area | Tools |
|------|-------|
| Frontend Framework | **React (Vite)** |
| Styling | **CSS: Grid + Flexbox** |
| Routing | **React Router** |
| Deployment | **Vercel** |
| Assets | Custom PNG/SVG muscle illustrations |

---

## 📁 Project Structure

src/
├── components/ → shared UI components
├── pages/ → individual muscle group pages
├── assets/ → images / icons
├── App.jsx
├── Routes.jsx
└── main.jsx

---

## 🖥️ Run Locally

```bash
git clone https://github.com/your-username/Muscle-Map
cd Muscle-Map
npm install
npm run dev

