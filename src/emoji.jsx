import React from "react";
import Entry from "./entry";
var output = [];

async function _callAPI() {
  const url =
    "https://emoji-api.com/emojis?access_key=ffba67a2b6d2d91ff077eca1abc0290ddf8dff39";
  const response = await fetch(url);
  const data = await response.json();
  for (let i in data) {
    output.push({
      unicodeName: data[i].unicodeName,
      character: data[i].character
    });
  }
  console.log(output.length);
}

function createEntry(emojiterm) {
  _callAPI();

  return (
    <Entry
      key={emojiterm.unicodeName}
      head={emojiterm.unicodeName}
      emo={emojiterm.character}
    />
  );
}

export default function Emojis() {
  return <div>{output.map(createEntry)}kj jhbas</div>;
}
