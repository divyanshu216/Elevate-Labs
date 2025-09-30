# Contact Form with Client-Side Validation

## 📌 Overview
This project is a simple **Contact Form** built using **HTML, CSS, and JavaScript** with client-side validation.  
It ensures that users enter valid inputs before submitting the form.

## ✅ Features
- Name, Email, and Message fields with a Submit button.
- Styled with CSS for a clean and modern look.
- JavaScript validation for:
  - Non-empty fields
  - Valid email format (Regex-based)
  - Name with only letters and spaces
  - Message must be at least 10 characters long
- Error messages displayed below each field.
- Prevents form submission if invalid.
- Shows success message when form is valid (no actual data sending).

## 🚀 How to Use
1. Clone or download this repository.
2. Keep the following files in the same folder:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open `index.html` in your browser.
4. Test form validation by entering valid/invalid inputs.

## 🧪 Edge Cases Handled
- Empty inputs
- Invalid email format
- Special characters in name field
- Short messages (< 10 characters)

## 📂 Project Structure
```
contact-form/
│── index.html      # Form structure
│── style.css       # Styling
│── script.js       # Validation logic
│── README.md       # Project documentation
```

## 📜 License
This project is open-source and free to use.
