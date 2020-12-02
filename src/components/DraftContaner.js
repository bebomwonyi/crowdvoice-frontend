import React from 'react';
import { Card, Media } from 'react-bootstrap';

function DraftContaner(props) {
  return (
    <div>
      <Card style={{width: '40rem'}}>
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
    </div>
  );
}

export default DraftContaner;