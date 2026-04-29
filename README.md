# backtest.ai Brand Strategy Workshop

An interactive, single-page web app for running a brand strategy workshop for backtest.ai. Walks the user through a structured questionnaire covering positioning, audience, values, messaging, and proof, then exports the answers as Markdown.

## Features

- Typeform-style, one-question-at-a-time flow with a section outline and progress indicator
- Multiple field types: text, textarea, single/multi-select, ranking, and inline prompts
- Auto-saves draft answers to `localStorage` under the key `backtest-ai-brand-workshop-v3`
- Required-field validation before export
- Markdown export of all answers via download
- Custom typography using PP Neue Montreal

## Project Structure

```
.
├── index.html        # App shell and loading skeleton
├── styles.css        # Styling
├── app.js            # All app logic: sections, rendering, state, export
├── fonts/            # PP Neue Montreal font files
└── images/
    └── fc-logo.png
```

## Running Locally

The project is plain HTML/CSS/JS with no build step. Serve the directory with any static file server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

Opening `index.html` directly via `file://` may also work, but a local server is recommended so font and asset loading behave consistently.

## Data & Persistence

All answers are stored client-side in `localStorage`. Nothing is sent to a server. Clearing the draft from within the app removes the stored entry.

## Export

Answers are compiled into a Markdown document and downloaded from the browser. The structure follows the workshop sections defined in `app.js`.
