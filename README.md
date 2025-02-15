# Express.js Route Handler Bug: Missing Error Handling and Specific Error Details

This repository demonstrates a common bug in Express.js route handlers: insufficient error handling and lack of detailed error responses.

The `bug.js` file shows a route handler that fails to handle cases where the user ID is invalid (not a number) or the user is not found.  It returns a generic 404 without informative details, making debugging difficult.

The `bugSolution.js` file provides a corrected version with proper error handling. It checks for invalid input, provides a more informative 404 if a user isn't found, and handles potential errors during ID parsing.