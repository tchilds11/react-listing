import React, { Component } from "react";
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ListingDetails extends Component {
  state = {
    jobDescription: [],
    job: [],
  };

  async componentDidMount() {
    const { jobQuery } = this.props.match.params;
    const response = await fetch(
      `http://127.0.0.1:3001/jobs/?url=https://jobs.github.com/positions.json?search=${jobQuery}/description`
    );
    const response2 = await fetch(`http://127.0.0.1:3001/jobs/?url=https://jobs.github.com/positions.json?description=${jobQuery}`);
    const jobDescription = await response.json();
    const job = await response2.json();
    this.setState({
      jobDescription,
      job,
    });
  }

  render() {
    const { jobDescription } = this.state;
    const { job } = this.state;
    return (
      <div>
          <Link to='/'>Home</Link>
        <p>{job.title}</p>
        <p>{job.location}</p>
        <p className=""> Job Description </p>
        <ul className="">
          {jobDescription.map((job) => {
            return <li key={job.id}>{parse(job.jobDescription)}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListingDetails;