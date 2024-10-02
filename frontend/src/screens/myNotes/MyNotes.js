import React, { useEffect  , useState} from "react";
import { Link } from "react-router-dom";
import { Card, Button, Badge, Accordion } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import MainScreen from "../../components/MainScreen";

import axios from 'axios'

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('accordion is clicked !'),
    );
  
    return (
      <button
        type="button"
        style={{ border : 0, backgroundColor : 'transparent' , borderRadius : 6 , padding: 4 }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

const MyNotes = () => {

  const [notes , setNotes]  = useState([])
  const fetchNotes = async () => {
    
    const {data} = await axios.get('/api/notes')
    setNotes(data)
  }
    
useEffect(()=> {

fetchNotes()

} , [])

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
        <Accordion key={note._id}>
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
                 <CustomToggle eventKey="0">{note.title}</CustomToggle>
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
            <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h4>
                <Badge variant="success" style={{ color: "white" }}>
                  category - {note.category}
                </Badge>
              </h4>

              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">
                  created on - 10th July 2021
                </footer>
              </blockquote>
            </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
