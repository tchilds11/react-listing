import React from "react";
// import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import '../Styled.css';

const ListingDetails = ({ listingList }) => {
    const { id } = useParams();
    const jobDetails = listingList.find((job) => {
        return job.id === id ? job : null;
    });
    

    return (
    <>
        <div class="container">
            <ReactBootStrap.Card style={{ width: '18rem' }}>
                    <ReactBootStrap.Card.Img variant="top" src={jobDetails.company_logo} />
                    <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>{jobDetails.title}</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>Job Posted:
                        {jobDetails.created_at}
                        </ReactBootStrap.Card.Text>
                    </ReactBootStrap.Card.Body>
                    <ReactBootStrap.ListGroup className="list-group-flush">
                        <ReactBootStrap.ListGroupItem>{jobDetails.type}</ReactBootStrap.ListGroupItem>
                        <ReactBootStrap.ListGroupItem>{jobDetails.company}</ReactBootStrap.ListGroupItem>
                        <ReactBootStrap.ListGroupItem>{jobDetails.location}</ReactBootStrap.ListGroupItem>
                    </ReactBootStrap.ListGroup>
                    <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Link href={parse(jobDetails.description)}>Full Details</ReactBootStrap.Card.Link>
                        <ReactBootStrap.Card.Link href={jobDetails.company_url}>Visit Company Site</ReactBootStrap.Card.Link>
                    </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
        </div>
        <div class="container">
            <h4>Apply Below</h4>
        </div>
        <div class="container">
        <p>{parse(jobDetails.how_to_apply)}</p>
        </div>
    </>
    )


}

export default ListingDetails;

