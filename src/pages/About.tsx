// src/components/About.tsx

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// Import the data and types from your data file
// Adjust the path '../data/members' as needed based on your file structure.
import { directors, members} from "../lib/members.ts";
import type {Member} from '../lib/members.ts'

const MemberProfile: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <Row className="my-4 align-items-center">
      <Col sm={4} md={3} className="text-center text-sm-start mb-3 mb-sm-0">
        <Image
          src={member.photo}
          alt={`Headshot of ${member.bio.name}`}
          roundedCircle
          fluid
          style={{ maxWidth: "180px", width: "100%" }}
        />
      </Col>
      <Col sm={8} md={9}>
        <h3>{member.bio.name}</h3>
        <p className="lead text-muted">{member.bio.part}</p>
        {/*
          If you add hometown/yearjoined back to your Bio interface,
          you can uncomment and use this section.
          <p>
            <strong>Hometown:</strong> {member.bio.hometown} <br />
            <strong>Joined:</strong> {member.bio.yearjoined}
          </p>
        */}
      </Col>
    </Row>
  );
};

function About() {
  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1>Meet the Chorale</h1>
        <p className="lead">
          Our group is composed of talented and passionate singers from the
          community.
        </p>
      </div>

      {/* Section for Directors */}
      <h2 className="border-bottom pb-2 mb-4">Directors</h2>
      {directors.map((director) => (
        <MemberProfile key={director.bio.name} member={director} />
      ))}

      {/* Section for Members */}
      <h2 className="mt-5 border-bottom pb-2 mb-4">Members</h2>
      {members.map((member) => (
        <MemberProfile key={member.bio.name} member={member} />
      ))}
    </Container>
  );
}

export default About;
