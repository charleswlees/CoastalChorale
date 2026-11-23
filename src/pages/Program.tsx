import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

interface Song {
  title: string;
  composer?: string;
  arranger?: string;
}

interface SeasonProgram {
  season: string;
  firstHalf: Song[];
  secondHalf: Song[];
}

const winter2026FirstHalf: Song[] = [
  { title: "All that Hath Life & Breath Praise Ye the Lord!", arranger: "René Clausen" },
  { title: "Omnia Sol", composer: "Z. Randall Stroope" },
  { title: "Music of Living", arranger: "Dan Forrest" },
  { title: "Warum ist das Licht gegeben dem Mühseligen", composer: "Johannes Brahms" },
  { title: "City Called Heaven", arranger: "Josephine Poelinitz" },
];

const winter2026SecondHalf: Song[] = [
  { title: "Small Groups"},
  { title: "Bach (Again)", composer: "J.S. Bach", arranger: "Rhonda Sandberg" },
  { title: "Hymn of Axciom", composer: "Vienna Teng", arranger: "Forrest Tripp" },
  { title: "Ain't No Grave", arranger: "Paul Caldwell & Sean Ivory" },
];

// Newest season first; add past programs below the current one.
const programs: SeasonProgram[] = [
  {
    season: "Winter 2026",
    firstHalf: winter2026FirstHalf,
    secondHalf: winter2026SecondHalf,
  },
];

const SongList: React.FC<{ songs: Song[] }> = ({ songs }) => (
  <div className="song-list">
    {songs.map((song, index) => (
      <div key={index} className="song-item mb-4">
        <h4 className="song-title text-primary mb-1">{song.title}</h4>
        <p className="song-credits text-muted mb-0">
          {song.composer && `${song.composer}`}
          {song.composer && song.arranger && " • "}
          {song.arranger && `Arr. ${song.arranger}`}
        </p>
      </div>
    ))}
  </div>
);

function Program() {
  const [season, setSeason] = useState(programs[0].season);
  const program = programs.find((p) => p.season === season) ?? programs[0];
  const isCurrent = program === programs[0];

  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1>Concert Program</h1>
        <p className="lead">{isCurrent ? "Our upcoming performance repertoire" : `${program.season} repertoire`}</p>
      </div>

      <Row className="justify-content-center">
        <Col lg={8} md={10}>
          <Card className="shadow-sm mb-4">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4 border-bottom pb-2">
                First Half
              </h2>
              <SongList songs={program.firstHalf} />
            </Card.Body>
          </Card>

          <div className="text-center my-4">
            <div className="intermission-divider">
              <hr className="my-3" />
              <h3 className="text-muted">~ Intermission ~</h3>
              <hr className="my-3" />
            </div>
          </div>

          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4 border-bottom pb-2">
                Second Half
              </h2>
              <SongList songs={program.secondHalf} />
            </Card.Body>
          </Card>

          {
            /*
          <div className="text-center mt-5">
            <p className="text-muted">
              <em>Program subject to change</em>
            </p>
          </div>
          */
          }

          <Form.Group className="mt-5" controlId="season-select">
            <Form.Label>Season</Form.Label>
            <Form.Select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
            >
              {programs.map((p, i) => (
                <option key={p.season} value={p.season}>
                  {p.season}
                  {i === 0 ? " (current)" : ""}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default Program;
