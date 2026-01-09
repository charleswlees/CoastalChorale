//import CalendarEvents from "../pages/Calendar";

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
                <div className="d-flex justify-content-center">
                  <a
                    className="btn btn-primary btn-lg"
                    href="https://coastalchorale.thundertix.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Tickets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
