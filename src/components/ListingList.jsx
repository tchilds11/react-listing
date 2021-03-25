import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";



const ListingList = ({listingList}) => {
    return (
        <>
            <ReactBootStrap.ListGroup variant="flush">
                {listingList.map((job, index) => {
                    return(
                        <ReactBootStrap.ListGroup.Item key={index}>
                            <Link to ={`/jobs/${job.id}`}>{job.title} - {job.type} - {job.location}</Link>
                        </ReactBootStrap.ListGroup.Item>
                    );
                })};
            </ReactBootStrap.ListGroup>
        </>
    );
};

export default ListingList;