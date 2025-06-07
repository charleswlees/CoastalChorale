import CalendarEvents from "../pages/Calendar";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="p-4 rounded"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h1 className="display-4 fw-bold mb-3">Coastal Chorale</h1>
                <p className="lead mb-4">Southern Maine's Premier Choir</p>
                {
                  //
                  //                <button className="btn btn-primary btn-lg me-2">
                  //                  Learn More
                  //                </button>
                  //                <button className="btn btn-outline-light btn-lg">
                  //                  Get Started
                  //                </button>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="calendar-section">
        <CalendarEvents />
      </section>
    </>
  );
}

export default Home;
