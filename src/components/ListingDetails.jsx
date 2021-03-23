import React from "react";
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
// import Styled from "styled-components";
import * as ReactBootStrap from "react-bootstrap";

// const Banner = Styled.h1`
// font-size: 24px;
// color: turquoise;
// `;

// const SubTitle = Styled.h1`
// font-size: 20px;
// color: turquoise;
// `;


const ListingDetails = ({ listingList }) => {
    const { id } = useParams();
    const jobDetails = listingList.find((job) => {
        return job.id === id ? job : null;
    });

    return (
        <div>
            <ReactBootStrap.Card style={{ width: '18rem' }}>
                    <ReactBootStrap.Card.Img variant="top" src={jobDetails.company_logo} />
                    <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>{jobDetails.title}</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                        {jobDetails.created_at}
                        </ReactBootStrap.Card.Text>
                    </ReactBootStrap.Card.Body>
                    <ReactBootStrap.ListGroup className="list-group-flush">
                        <ReactBootStrap.ListGroupItem>{jobDetails.type}</ReactBootStrap.ListGroupItem>
                        <ReactBootStrap.ListGroupItem>{jobDetails.company}</ReactBootStrap.ListGroupItem>
                        <ReactBootStrap.ListGroupItem>{jobDetails.location}</ReactBootStrap.ListGroupItem>
                    </ReactBootStrap.ListGroup>
                    <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Link href="#">{jobDetails.how_to_apply} Apply Here</ReactBootStrap.Card.Link>
                        <ReactBootStrap.Card.Link href="#">{jobDetails.company_url}</ReactBootStrap.Card.Link>
                    </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
        </div>
    )


}

export default ListingDetails;

