# Linktree Clone with Vite + React

A modern, responsive Linktree-style landing page built with Vite and React. Easily customize your profile image, text, and links.

## Features

- Modern CSS with container queries for advanced responsive design
- Modular React components: Profile and Links
- Easy to customize: just edit `src/App.jsx`, `src/Profile.jsx`, and `src/Links.jsx`
- Fast build and hot reload with Vite

## Getting Started

1. **Install dependencies**

   ```powershell
   npm install
   ```

2. **Run the development server**

   ```powershell
   npm run dev
   ```

3. **Build for production**

   ```powershell
   npm run build
   ```

4. **Customize your profile**
   - เปลี่ยนรูปโปรไฟล์, ข้อความ, และลิงก์ต่าง ๆ ในไฟล์ `src/App.jsx`
   - สามารถแก้ไขหรือเพิ่ม component ได้ตามต้องการ

## Customize

- รูปโปรไฟล์: เปลี่ยน URL ใน `profileData.image`
- ข้อความ: แก้ไข `profileData.name` และ `profileData.description`
- ลิงก์: เพิ่ม/ลบ/แก้ไขใน `linksData`

---

> รองรับ container query (CSS @container) และ responsive เต็มรูปแบบ
