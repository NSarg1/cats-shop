import React from "react";
import "./app.scss";

class App extends React.Component {
    state = {
        search: "Narek",
        cats: ["Marvin", "Darvin", "Harry Potter"],
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ search: value });
    };

    render() {
        console.log(this.state.cats);

        return (
            <div className="app">
                <h1 className="app__header">Catty shop</h1>

                <div className="app__search">
                    <input
                        onChange={(event) => this.handleChange(event)}
                        className="app__search-input"
                        type="text"
                        name="search"
                        placeholder="Search cats"
                    />
                </div>

                <main className="app__main">
                    <ul>
                        {this.state.cats.map((cat) => {
                            return <li>{cat}</li>;
                        })}
                    </ul>
                </main>
            </div>
        );
    }
}

export default App;
