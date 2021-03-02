import React from "react";

// COMPONENTS
import CardItem from "./components/card-item/CardItem.component";

// STYLES
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
                            return <CardItem key={idx} cat={cat} idx={idx} />;
                        })}
                    </ul>
                </main>
            </div>
        );
    }
}

export default App;
