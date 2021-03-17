import React from 'react';
import ListingDetails from './ListingDetails'

const ListingList = (props) => {
    const { jobs } = props;
    return (
        <ul>
            {jobs.map(job => {
              return  <ListingDetails job={job} key={job.id} />
            })}
        </ul>
    )
}
export default ListingList;