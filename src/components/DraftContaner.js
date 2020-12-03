import React from 'react';
import { Card, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function DraftContaner(props) {
  return (
    <div>
      <Link to="/user/publish">
        <Card style={{ width: '40rem' }} onClick={(e)=>props.opd(props.draft)}>
          <Media>
            <img
              width={64}
              height={64}
              src={`${props.draft.refartimgurl}`}
            />
            <Media.Body>
              <h5>{props.draft.title}</h5>
              <p>{props.draft.description}</p>
            </Media.Body>
          </Media>
        </Card>
      </Link>
    </div>
  );
}

export default DraftContaner;