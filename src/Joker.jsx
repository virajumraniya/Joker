import { useEffect, useState } from "react";

const techTools = [
  ["UUID Generator", "Create a unique identifier for your next project."],
  ["Random String", "Generate a custom string in one click."],
  ["Random Number", "Pick a number in your chosen range."],
  ["Color Palette", "Find a colour combination for your UI."],
  ["JSON Formatter", "Make JSON data clean and readable."],
  ["Password Generator", "Create a strong password instantly."],
];

export default function Joker() {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const getNewJoke = async () => {
    setIsLoading(true);
    setError("");
    setCopied(false);

    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=twopart",
      );
      if (!response.ok) throw new Error("Unable to load a joke right now.");
      const data = await response.json();
      if (data.error) throw new Error("Unable to load a joke right now.");
      setJoke({ setup: data.setup, punchline: data.delivery });
    } catch {
      setError("We couldn't fetch a fresh joke. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyJoke = async () => {
    if (!joke) return;
    try {
      await navigator.clipboard.writeText(`${joke.setup}\n\n${joke.punchline}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setError(
        "Copy isn't available in this browser. Please select the joke manually.",
      );
    }
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <main className="app-shell">
      <header className="hero">
        <div className="brand-row">
          <span className="brand-mark">&lt;/&gt;</span> ByteLaugh
        </div>
        <h1>Tech jokes for your next break.</h1>
        <p>
          Get a random programming joke, then copy it to brighten a developer's
          day.
        </p>
      </header>

      <section className="joke-card" aria-live="polite">
        <span className="eyebrow">RANDOM PROGRAMMING JOKE</span>
        {isLoading ? (
          <div className="joke-loading">
            <span className="loader" /> Finding something nerdy...
          </div>
        ) : error && !joke ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="joke-copy">
            <p className="setup">{joke?.setup}</p>
            <p className="punchline">{joke?.punchline}</p>
          </div>
        )}
        {error && joke && <p className="error-message compact">{error}</p>}
        <div className="joke-actions">
          <button
            className="primary-button"
            onClick={getNewJoke}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Generate new joke"}
          </button>
          <button
            className="copy-button"
            onClick={copyJoke}
            disabled={!joke || isLoading}
          >
            <span aria-hidden="true">⧉</span> {copied ? "Copied!" : "Copy joke"}
          </button>
        </div>
      </section>

      <section className="info-grid">
        <article className="info-card">
          <span className="card-icon">✦</span>
          <h2>What is ByteLaugh?</h2>
          <p>
            ByteLaugh is a tiny generator for developers who enjoy a good
            punchline between commits. Every click brings a fresh programming
            joke to your screen.
          </p>
          <p>
            Use it to lighten a study session, start a team chat, or simply take
            a quick mental break from debugging.
          </p>
        </article>
        <article className="info-card">
          <span className="card-icon">⌁</span>
          <h2>Why use it?</h2>
          <ul>
            <li>
              <strong>Quick reset</strong> — a small laugh can refresh your
              focus.
            </li>
            <li>
              <strong>Team friendly</strong> — copy a joke for stand-ups and
              group chats.
            </li>
            <li>
              <strong>Made for tech</strong> — jokes are selected from the
              programming category.
            </li>
          </ul>
        </article>
      </section>

      <section className="how-it-works">
        <h2>How to use ByteLaugh</h2>
        <div className="steps">
          <div>
            <span>1</span>
            <h3>Generate</h3>
            <p>Click the button to get a new joke.</p>
          </div>
          <div>
            <span>2</span>
            <h3>Read & enjoy</h3>
            <p>Take a break from your code.</p>
          </div>
          <div>
            <span>3</span>
            <h3>Copy & share</h3>
            <p>Send a laugh to your favourite dev.</p>
          </div>
        </div>
        <div className="tip">
          <strong>Pro tip:</strong> Hit “Copy joke” to save both the setup and
          punchline to your clipboard.
        </div>
      </section>

      <section className="tools-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE MORE</span>
            <h2>Related tools</h2>
          </div>
          <button className="outline-button">View all tools</button>
        </div>
        <div className="tools-grid">
          {techTools.map(([name, description]) => (
            <article className="tool-card" key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
              <span>Generator →</span>
            </article>
          ))}
        </div>
      </section>
      <footer>Made for curious minds and clean code.</footer>
    </main>
  );
}
