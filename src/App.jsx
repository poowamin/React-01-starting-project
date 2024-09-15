import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  // let tabcontent = "Please click a button";
  const [selectedTopic, setSeclectedTopic ] = useState("Pleas click a button");

  function clickHandler(selectButton) {
    // selectButton => 'components', 'jsx', 'props', 'state'
    setSeclectedTopic(selectButton);
    // console.log(selectedTopic);
  }

  console.log("APP COMPONENT EXECUTING");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => clickHandler("component")}>
              Compoennts
            </TabButton>
            <TabButton onSelect={() => clickHandler("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => clickHandler("props")}>Props</TabButton>
            <TabButton onSelect={() => clickHandler("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
