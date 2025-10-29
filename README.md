# 🏙️ SnapFix- Civic Report Platform
A MERN-stack application that allows citizens to report local civic issues (like potholes, waste, or broken infrastructure) with image uploads, live updates, and AI-based image classification.

## 🌐 Live Demo
🎥 **YouTube Demo:** [Watch on YouTube](https://youtu.be/u7jqRsIpRh0)
🚀 **Deployed App:** [Try it Live on Mobile](https://sih-1-frontend.vercel.app/)

---

## 🚀 Features

- 🧾 **Issue Reporting:** Users can submit reports with description, location, and photos.  
- 🧠 **AI Image Classification:** ML model automatically categorizes issues (e.g., road, garbage, water leak).  
- 🗺️ **Geolocation Integration:** Auto-fetches user’s current location with reverse geocoding.  
- ☁️ **Image Storage:** Uses **Cloudinary** for scalable image upload and storage.  
- 💬 **Real-time Updates:** **Socket.io** enables live updates when new issues are reported or resolved.  
- 👮 **Admin Dashboard:** Officials can view, verify, and update status of reports.  
- 📱 **Responsive UI:** Built with React for mobile and desktop.  

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ORM) |
| Real-time | Socket.io |
| Cloud Storage | Cloudinary |
| AI Model | Custom ML model (image classification using TensorFlow/PyTorch) |
| Deployment | ( Render / Vercel ) |

---

## ⚙️ Installation & Setup
```
git clone https://github.com/Sriniketh-J7/SIH2025-PS1.git
cd SIH2025-PS1/frontend
npm install
npm run dev

cd SIH2025-PS1/backend
npm install
npm run dev
```

---

## 🧠 AI Image Classification
Images uploaded by users are sent to a backend ML API.
The model predicts issue type (e.g., pothole, garbage, sewage leak).
The result is stored in MongoDB and shown in the report list.

---

## 🧰 Future Enhancements
✅ Push notifications for updates
✅ Integration with municipal dashboards
✅ Analytics dashboard for report insights
✅ Multi-language support
