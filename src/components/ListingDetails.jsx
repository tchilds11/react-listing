import React from "react";
// import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import Styled from "styled-components";

const Banner = Styled.h1`
font-size: 24px;
color: turquoise;
`;

const SubTitle = Styled.h1`
font-size: 20px;
color: turquoise;
`;


const ListingDetails = ({ listingList }) => {
    const { id } = useParams();
    const jobDetails = listingList.find((job) => {
        return job.id === id ? job : null;
    });

    return (
        <div>
            <Banner>{jobDetails.title}</Banner>
            <img alt="" src={jobDetails.company_logo} width="150" height="150"></img>
            <SubTitle>{jobDetails.type}</SubTitle>
            <p>Job Description</p>
            <h4>{parse(jobDetails.description)}</h4>
        </div>
    )


}

export default ListingDetails;

