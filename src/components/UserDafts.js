import React from 'react';
import DC from './DraftContaner'

const UserDafts = (props) => {
  return (
    <div>
      {props.user.user_articles ? 
      props.user.user_articles.map(draft => {
        return <DC draft={draft}/>
      }) : null}
    </div>
  );
}

export default UserDafts;