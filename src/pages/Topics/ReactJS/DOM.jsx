import React, { useEffect, useState } from 'react'

export default function DOM() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  return (
    <section className={`real-dom-page ${mounted ? 'appear' : ''}`}>
      <header className="real-dom-header">
        <h1>Real DOM (Document Object Model)</h1>
        <p className="real-dom-lead">
          Browser द्वारा बनाया गया tree structure जो HTML document को represent करता है। यह browser की memory में रहता है और UI को render करने के लिए use होता है।
        </p>
      </header>

      <article className="real-dom-card">
        <h2>1. Definition</h2>
        <p>
          जब भी HTML page load होता है, browser उस HTML को DOM tree में convert कर देता है। DOM tree में हर HTML element एक node के रूप में होता है, और ये nodes parent-child relationships में organized होते हैं।
          DOM का main purpose है webpage को interactive बनाना, जिससे JavaScript के माध्यम से elements को manipulate किया जा सके।
        </p>
      </article>

      <article className="real-dom-card">
        <h2>2. Structure of Real DOM</h2>
        <p><strong>Example HTML</strong></p>
        <pre className="code-block">
{`<div>
  <h1>Hello</h1>
  <p>Welcome</p>
</div>`}
        </pre>
        <p><strong>Browser इसे DOM tree में convert करता है:</strong></p>
        <pre className="code-block">
{`        div
       /   \
     h1     p
     |      |
   Hello  Welcome`}
        </pre>
      </article>

      <article className="real-dom-card highlight">
        <h2>3. How Real DOM Works</h2>
        <p>Real DOM directly browser के साथ interact करता है। जब कोई change होता है:</p>
        <ol>
          <li>JavaScript DOM को modify करता है</li>
          <li>Browser layout calculate करता है</li>
          <li>Browser reflow करता है</li>
          <li>Browser repaint करता है</li>
        </ol>
        <pre className="code-block">
{`DOM Change
   ↓
Reflow (layout calculation)
   ↓
Repaint (UI redraw)`}
        </pre>
        <p className="important">
          अगर DOM में बहुत ज्यादा updates हों तो performance slow हो सकती है।
        </p>
      </article>

      <article className="real-dom-card">
        <h2>4. Example of Real DOM Manipulation</h2>
        <pre className="code-block">
{`const element = document.getElementById("title");
element.innerText = "Hello React";`}
        </pre>
        <p>यह code directly Real DOM को update करता है।</p>
      </article>

      <article className="real-dom-card highlight">
        <h2>5. Problems with Real DOM</h2>
        <ul>
          <li>DOM manipulation expensive होता है</li>
          <li>Frequent updates slow होते हैं</li>
          <li>Large UI में performance issues</li>
          <li>Browser को बार-बार reflow और repaint करना पड़ता है</li>
        </ul>
        <p className="important">
          इसी समस्या को solve करने के लिए React ने <strong>Virtual DOM</strong> introduce किया।
        </p>
      </article>
    </section>
  )
}
