# To-Do List Web App

A simple, interactive To-Do List web application built with Vanilla JavaScript, HTML, and CSS. Users can add tasks, mark them as complete, and delete them, with a modern and responsive user interface featuring animations and a clean design.

## Features
- **Add Tasks**: Enter tasks via an input field and add them using a button or the Enter key.
- **Mark Tasks Complete**: Toggle a checkbox to mark tasks as complete, with visual feedback (strikethrough and background color change).
- **Delete Tasks**: Remove tasks with a delete button.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Instant UI Updates**: All actions (add, complete, delete) update the UI without page reloads.
- **Modern Styling**: Vibrant gradient background, hover animations, and Poppins font for a polished look.

## Project Structure
```
Task 2/
├── index.html      # Main HTML file
├── styles.css      # CSS for styling and animations
├── script.js       # JavaScript for functionality
├── README.md       # Project documentation
```

## Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Task 2.git
   cd Task 2
   ```
   Replace `your-username` with your GitHub username.

2. **Open the App**:
   - Open `index.html` in a web browser (e.g., Chrome, Firefox) directly via `file://` or use a local server for best results:
     ```bash
     npx live-server
     ```
     Install `live-server` if needed: `npm install -g live-server`.

3. **Dependencies**:
   - No external dependencies are required for functionality.
   - The Poppins font is loaded via Google Fonts (internet connection needed for font rendering).

## Usage
1. **Add a Task**:
   - Type a task in the input field.
   - Click the "Add" button or press Enter.
   - The task appears in the list with a checkbox and delete button.
2. **Mark as Complete**:
   - Check the checkbox next to a task to mark it complete (adds strikethrough and light cyan background).
   - Uncheck to revert.
3. **Delete a Task**:
   - Click the "Delete" button next to a task to remove it instantly.
4. **Responsive Testing**:
   - Resize the browser or open on a mobile device to test the responsive layout.


## Testing
- **Add Tasks**: Verify tasks appear instantly with a checkbox and delete button.
- **Complete Tasks**: Check/uncheck the checkbox to toggle completion (strikethrough and background change).
- **Delete Tasks**: Click "Delete" to remove tasks instantly.
- **Edge Cases**: Test empty inputs (should show an alert), long task names, and mobile responsiveness.
- **Browser Compatibility**: Tested on Chrome, Firefox, and Edge.

## Future Enhancements
- Add local storage to persist tasks across sessions.
- Implement task editing or categorization.
- Add filters to view completed or pending tasks.
