import React from "react";
import axios from "axios";

// COMPONENTS
import CardItem from "./components/card-item/CardItem.component";

// STYLES
import "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      cats: [
        {
          id: 1,
          name: "Marvin",
          email: "marvin@mail.com",
          // url: "https://robohash.org/1?set=set4&size=180x180",
        },
        {
          id: 2,
          name: "Darvin",
          email: "darvin@mail.com",
          // url: "https://robohash.org/2?set=set4&size=180x180",
        },
        {
          id: 3,
          name: "Harry Potter",
          email: "harry@mail.com",
          // url: "https://robohash.org/3?set=set4&size=180x180",
        },
        {
          id: 4,
          name: "Kitty",
          email: "harry@mail.com",
          // url: "https://robohash.org/3?set=set4&size=180x180",
        },
        {
          id: 5,
          name: "Petya",
          email: "harry@mail.com",
          // url: "https://robohash.org/3?set=set4&size=180x180",
        },
      ],
      catsFromServer: [],
    };

    console.log("Constructor...");
  }

  handleChange = (event) => {
    //? INPUTVALUE
    const searchValue = event.target.value;

    //? SET INPUT VALUE TO STATE
    this.setState({ search: searchValue });
  };

  componentDidMount() {
    console.log("componentDidMount...");
    this.setState({ isLoading: true });
    const response = axios.get("https://jsonplaceholder.typicode.com/users");

    response
      .then((result) => {
        const data = result.data;
        this.setState({ catsFromServer: data, isLoading: false });
        // console.log("OK");
      })
      .catch((err) => {
        setTimeout(() => {
          this.setState({
            errorMessage: "Something went wrong",
            isLoading: false,
          });
        }, 2000);
        // console.log("չOK");
      });
  }

  deleteCatHandle = (id) => {
    const cats = [...this.state.catsFromServer];

    const selectedUserIndex = this.state.catsFromServer.findIndex(
      (item, idx) => {
        return item.id === id;
      }
    );
    console.log(selectedUserIndex);
    cats.splice(selectedUserIndex, 1);
    console.log(cats);
    this.setState({ catsFromServer: cats });
  };

  //   deleteCatHandle = (id) => {
  //     const newCatsFromSerfer = this.state.catsFromServer.filter(
  //       (catFromServer) => {
  //         return catFromServer.id !== id;
  //       }
  //     );

  //     this.setState({ catsFromServer: newCatsFromSerfer });
  //   };

  render() {
    console.log("render...");
    const mySearchInputValue = this.state.search.toLowerCase();
    const filteredCatsData = this.state.catsFromServer.filter((cat) => {
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
            {!!this.state.catsFromServer.length &&
              filteredCatsData.map((cat) => {
                return (
                  <CardItem
                    key={cat.id}
                    cat={cat}
                    deleteCatHandle={this.deleteCatHandle}
                  />
                );
              })}
          </ul>
        </main>

        {this.state.isLoading && <div>Loading...</div>}

        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
      </div>
    );
  }
}

export default App;
