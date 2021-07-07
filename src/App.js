import React from "react";
import "./styles.css";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";

/* UI Assumption: The 'card-wrapper' is not made part of
 * the skeleton assuming there could be different types of
 * UI components. */

class App extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    // Hack: Mock the behaviour similar to a real-world scenario
    setTimeout(() => (this.setState({ isLoading: false })), 4000);
  }
  
  toggleLoadingUI = () => {
    const { isLoading } = this.state;

    this.setState({
      isLoading: !isLoading
    });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="app">
        <button onClick={this.toggleLoadingUI} className="toggle-button">
          Toggle loader UI
        </button>
        <br />
        <h2>Example 1</h2>
        <p>
          Options to add variable widths and heights using any valid CSS units.
        </p>
        <br />
        <div className="card-wrapper">
          {isLoading ? (
            <React.Fragment>
              <SkeletonLoader width="300px" height="180px" />
              <SkeletonLoader count={2} />
              <SkeletonLoader width="50%" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img
                src="https://vignette.wikia.nocookie.net/starwars/images/b/bf/LEGO.png"
                width="300px"
                height="180px"
                alt="Lego logo"
              />
              <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.</p>
              <p>Any CSS unit works!</p>
            </React.Fragment>
          )}
        </div>
        <br />
        <h2>Example 2</h2>
        <p>
          Options to create a circle and provide a custom class to get a
          different gradient.
        </p>
        <br />
        <div className="card-wrapper">
          {isLoading ? (
            <React.Fragment>
              <SkeletonLoader
                circle
                width="100px"
                customClassName="custom-gradient"
              />
              <SkeletonLoader count={3} customClassName="custom-gradient" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img
                src="https://prairieprince.com/wp-content/uploads/2015/05/youtube-icon-black.png"
                width="100px"
                height="100px"
                alt="YouTube logo"
              />
              <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.</p>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
