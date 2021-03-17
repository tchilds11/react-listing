import React from "react";
import { Link } from 'react-router-dom';

const ListingDetails = (props) => {
  return (
    <div>
      <li key={props.id}>
        {/* <img src={props.company_logo} alt={`${props.name}`} ></img> */}
        <Link to={`/jobs/${props.company_url}`}>Company Link</Link>
      </li>
    </div>
  );
};

export default ListingDetails; 