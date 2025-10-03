# Tiny AI Q&A Bot (Node.js)

A simple command-line AI-powered Q&A bot built with Node.js and OpenAI API.

## Features
- Ask any question and get AI-generated answers
- Uses OpenAI API for responses
- Command-line interface

## Requirements
- Node.js (v18 or higher recommended)
- npm
- OpenAI API key

## Installation
1. Clone or download this repository.
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Set your OpenAI API key in a `.env` file:
   ```env
   OPENAI_API_KEY=your-api-key-here
   ```
2. Start the bot:
   ```bash
   npm start
   ```
3. Type your question and press Enter. Type `exit` to quit.

## Files
- `qa-bot.js`: Main bot logic
- `package.json`: Project configuration
- `package-lock.json`: Dependency lock file

## Troubleshooting
- If you see a quota error from OpenAI, check your API plan and billing.
- For module warnings, ensure `"type": "module"` is set in `package.json`.

## License
ISC
