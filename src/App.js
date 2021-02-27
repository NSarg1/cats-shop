import React from "react";
import "./app.scss";

class App extends React.Component {
    state = {
        search: "",
        cats: [
            {
                name: "Marvin",
                email: "marvin@mail.com",
                // url: "https://robohash.org/1?set=set4&size=180x180",
            },
            {
                name: "Darvin",
                email: "darvin@mail.com",
                // url: "https://robohash.org/2?set=set4&size=180x180",
            },
            {
                name: "Harry Potter",
                email: "harry@mail.com",
                // url: "https://robohash.org/3?set=set4&size=180x180",
            },
            {
                name: "Kitty",
                email: "harry@mail.com",
                // url: "https://robohash.org/3?set=set4&size=180x180",
            },
            {
                name: "Petya",
                email: "harry@mail.com",
                // url: "https://robohash.org/3?set=set4&size=180x180",
            },
        ],
    };

    handleChange = (event) => {
        //? INPUTVALUE
        const searchValue = event.target.value;

        //? SET INPUT VALUE TO STATE
        this.setState({ search: searchValue });
    };

    render() {
        const mySearchInputValue = this.state.search.toLowerCase();
        const filteredCatsData = this.state.cats.filter((cat) => {
            const catLowerCaseName = cat.name.toLowerCase();
            return catLowerCaseName.includes(mySearchInputValue);
        });

        return (
            <div className="app">
                <h1 className="app__header">Catty shop</h1>

                <div className="app__search">
                    <input
                        onChange={(event) => this.handleChange(event)}
                        value={this.state.search}
                        className="app__search-input"
                        type="text"
                        name="search"
                        placeholder="Search cats"
                    />
                </div>

                <main className="app__main">
                    <ul className="app__main-list">
                        {filteredCatsData.map((cat, idx) => {
                            return (
                                <li className="item">
                                    <img
                                        src={`https://robohash.org/${idx + 1}?set=set4`}
                                        alt="cat"
                                        className="item__image"
                                    />
                                    <div className="item__header">{cat.name}</div>
                                    <div>{cat.email}</div>
                                </li>
                            );
                        })}
                    </ul>
                </main>
            </div>
        );
    }
}

export default App;
