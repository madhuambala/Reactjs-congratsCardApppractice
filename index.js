const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h2 className="heading2">Kiran V</h2>
      <p className="paragraph">
        Vishnu institute of Education and Technology at Bhimavaram{" "}
      </p>
      <img
        className="image1"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
