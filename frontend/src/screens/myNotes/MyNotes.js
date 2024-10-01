import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import notes from "./../../data/notes";
const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("are you sure ...")) {
    }
  };
  return (
    <MainScreen title="welcome back amar srivastava">
      <Link to="createnote">
        <Button styles={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              {note.title}
            </span>
            <div>
              <Button href={`/note/${note._id}`}>Edit</Button>
              <Button
                onClick={() => {
                  deleteHandler(note._id);
                }}
                style={{ marginLeft: 8 }}
                variant="danger"
              >
                Delete
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                lorem ipsum asd aswer dfg ghj qer zxcv asd rwe rty sd xdfg w wef
                wet 3r dfh 43 sdg sdf s a ante . 
              </p>
              <footer className="blockquote-footer">
                Someone in side 
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
