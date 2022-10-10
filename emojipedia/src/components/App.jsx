import React from "react";
import Entry from "../components/Entry"
import emojipedia from "../emojipedia"



// creating a map function
function createEntry(emojiTerms){
  return (
    <Entry 
    key={emojiTerms.id}
    emoji={emojiTerms.emoji}
    name={emojiTerms.name}
    meaning={emojiTerms.meaning}
    />
  )
}







function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* by using the map function */}
        {emojipedia.map(createEntry)}
        {/* using componenets and props */}
        {/* <Entry
        emoji={emojipedia[0].emoji}
        name={emojipedia[0].name}
        meaning={emojipedia[0].meaning}
        />
        <Entry
        emoji={emojipedia[1].emoji}
        name={emojipedia[1].name}
        meaning={emojipedia[1].meaning}
        />
        <Entry
        emoji={emojipedia[2].emoji}
        name={emojipedia[2].name}
        meaning={emojipedia[2].meaning}
        /> */}
      </dl>
    </div>
  );
}

export default App;
