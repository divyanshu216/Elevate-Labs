# Responsive Website with Mobile-Friendly Navigation

This project demonstrates how to convert a desktop-only webpage into a **mobile-friendly, responsive layout** using **CSS media queries** and a **hamburger navigation menu**.

## 🚀 Features
- Desktop-first design with two columns.
- Responsive **CSS media queries** targeting `max-width: 768px`.
- Navigation menu:
  - Inline links on desktop.
  - Hamburger (☰) menu on mobile.
  - Mobile menu toggles open/close.
- Columns stack vertically on smaller screens.
- Font sizes adjust for readability.
- Images scale within containers (`max-width: 100%; height: auto;`).
- No horizontal overflow or unwanted scrolling.

## 📂 Project Structure
```
project-folder/
│── index.html
│── style.css
│── README.md
```

## 🛠️ How to Use
1. Clone or download this repository.
2. Open `index.html` in a browser (or use **VS Code Live Server**).
3. Resize the browser window or use **Chrome DevTools (F12 → Toggle Device Toolbar)** to test responsiveness.

## 📱 Responsive Design Behavior
- **Desktop (width > 768px):**
  - Navigation displayed inline.
  - Two-column layout (left & right).
- **Mobile (width ≤ 768px):**
  - Navigation becomes a hamburger menu.
  - Columns stack vertically.
  - Smaller font sizes for readability.

## 🖼️ Preview
Desktop view:
```
+--------------------------------------+
| Logo        Home About Services Contact |
+--------------------------------------+
| Left Column    |   Right Column       |
+--------------------------------------+
```

Mobile view:
```
[Logo] [☰]
↓ (Menu expands when ☰ clicked)
Home
About
Services
Contact

Left Column
Right Column
```

---

👨‍💻 **Author**: Divyanshu  
📅 **Year**: 2025
