import React from "react";
import "./styles.css";
import Entry from "./entry.jsx";
import emojipedia from "./emojipedia";
import Emojis from "./emoji";

function createEntries(emojiterm) {
  return (
    <Entry
      key={emojiterm.id}
      head={emojiterm.name}
      emo={emojiterm.emoji}
      desc={emojiterm.meaning}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1>EmojiPedia</h1>
      <span role="img" aria-label="head">
        Made with ✨ by Sukhvinder Singh
      </span>
      <dl className="dict">{emojipedia.map(createEntries)}</dl>
      <Emojis />
    </div>
  );
}
