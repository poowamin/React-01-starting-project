import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  // let tabcontent = "Please click a button";
  const [selectedTopic, setSeclectedTopic] = useState("");

  function clickHandler(selectButton) {
    // selectButton => 'components', 'jsx', 'props', 'state'
    setSeclectedTopic(selectButton);
    // console.log(selectedTopic);
  }

  console.log("APP COMPONENT EXECUTING");

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section titile="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => clickHandler("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => clickHandler("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => clickHandler("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => clickHandler("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}