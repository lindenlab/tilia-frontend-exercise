import { useState } from "react";
import { Search, ORIENTATION } from "./Search";

function App() {
  const [orientation, setOrientation] = useState(ORIENTATION.VERTICAL);
  return (
    <div className="App">
      <label>
        <input
          type="checkbox"
          onChange={(e) => setOrientation(e.target.checked ? ORIENTATION.VERTICAL : ORIENTATION.HORIZONTAL)}
          checked={orientation === ORIENTATION.VERTICAL}
        />
        Vertical
      </label>
      <Search orientation={orientation} />
    </div>
  );
}

export default App;
