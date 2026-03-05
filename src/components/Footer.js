import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: {},
      fadeIn: true,
    };
  }

  componentDidMount() {
    this.fetchRandomJokes();
    this.intervalId = setInterval(this.fetchRandomJokes, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchRandomJokes = async () => {
    try {
      this.setState({ fadeIn: false });

      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/programming/random"
      );
      const json = await response.json();
      const joke = Array.isArray(json) ? json[0] : json;

      // Short delay to trigger fade-in effect
      setTimeout(() => {
        this.setState({ joke, fadeIn: true });
      }, 100);
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    }
  };

  render() {
    const { setup, punchline } = this.state.joke;

    return (
      <footer className="footer">
        <div className="container text-center">
          <span className={this.state.fadeIn ? "fade-in" : "fade-out"}>
            {setup}{" "}
            <em>
              <b>{punchline}</b>
            </em>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
