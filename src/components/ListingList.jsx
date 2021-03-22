import { Link } from 'react-router-dom';



const ListingList = ({listingList}) => {
    return (
        <>
            <ul>
                {listingList.map((job, index) => {
                    return(
                        <li key={index}>
                            <Link to ={`/jobs/${job.id}`}>{job.title}</Link>
                        </li>
                    );
                })};
            </ul>
        </>
    );
};

export default ListingList;