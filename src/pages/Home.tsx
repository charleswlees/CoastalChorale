import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import CalendarEvents from "./Calendar";

const facebookReelUrl = "https://www.facebook.com/reel/4545850952364409/";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/coastal.chorale/", Icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com/@CoastalChorale", Icon: FaYoutube },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61560039329545", Icon: FaFacebook },
];

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/99X8EvGBaN4"
                title="Coastal Chorale on YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(facebookReelUrl)}&show_text=true&width=267&height=476&t=0`}
              title="Coastal Chorale on Facebook"
              width="267"
              height="591"
              style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="container my-5 text-center">
        <h2 className="mb-3">About</h2>
        <p className="lead mx-auto" style={{ maxWidth: 700 }}>
          Our mission is to bring the joy of choral music to Southern Maine
          through excellent performances and a welcoming community.
        </p>
        <p className="mb-3">You can also see us on the following platforms</p>
        <div className="d-flex justify-content-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-primary"
            >
              <Icon size={40} />
            </a>
          ))}
        </div>
      </section>

      <CalendarEvents />
    </>
  );
}

export default Home;
