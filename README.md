# Modern Password Generator

## Overview

This Modern Password Generator is a sleek, user-friendly web application that allows you to create secure, customizable passwords with ease. Built with HTML, CSS, and JavaScript, this tool offers a responsive design with a beautiful UI and intuitive controls.

## Features

- **Customizable Password Generation**: Control the length and character types in your password
  - Password length (4-32 characters)
  - Include/exclude uppercase letters
  - Include/exclude lowercase letters
  - Include/exclude numbers
  - Include/exclude special symbols

- **Password Strength Meter**: Visual indicator showing how strong your generated password is
  - Weak
  - Medium
  - Strong
  - Very Strong

- **Modern UI/UX**:
  - Clean, intuitive interface
  - Responsive design that works on all devices
  - Smooth animations and transitions
  - Copy to clipboard functionality
  - One-click password regeneration

- **Dark/Light Theme Toggle**: Switch between dark and light modes based on your preference
  - Automatically detects system preference
  - Remembers your choice for future visits

## How to Use

1. Open `index.html` in any modern web browser
2. Customize your password requirements using the checkboxes and length slider
3. Click the "Generate Password" button or the refresh icon to create a new password
4. Copy the password to your clipboard by clicking the copy icon
5. Toggle between dark and light themes using the moon/sun icon in the top-right corner

## Password Strength Criteria

The strength of your password is calculated based on:
- Password length
- Variety of character types used
- Combination of different character sets

For maximum security, aim for "Very Strong" passwords that:
- Are at least 12 characters long
- Include all character types (uppercase, lowercase, numbers, and symbols)

## Installation

No installation required! This is a standalone web application that runs in your browser.

### Quick Start

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start generating secure passwords!

Alternatively, you can run a simple HTTP server to serve the files:

```bash
# Using Python (from the project directory)
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## Browser Compatibility

This password generator works in all modern browsers, including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Font Awesome for the icons
- Modern CSS techniques for the UI components
