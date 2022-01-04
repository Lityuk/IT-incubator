import React from "react";
import "./App.css";

function App() {
    const names = [{id: 1, name: "Vova"}, {id: 24, name: "Sveta"}, {id: 365, name: "Vasia"}, {id: 445, name: "Lena"}];
    const liElement = names.map((n) => <div key={n.id}>
        <li>{n.name}</li>
    </div>);

    return (
        <div className="App">
            learn react
            <ul>{liElement}</ul>
        </div>
    );
}

export default App;
