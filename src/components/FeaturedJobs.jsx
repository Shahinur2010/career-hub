import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FeaturedJob from './FeaturedJob';

const FeaturedJobs = ({ featuredJobs }) => {
    
    const [seeMore, setSeeMore] = useState(false);
    const handleAllJobs = () => {
        setSeeMore(!seeMore)
    }
    let jobs= featuredJobs;
    if(!seeMore){
        jobs = featuredJobs.slice(0,4)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
            {jobs.map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)}
           
            {!seeMore && <div className='mx-auto'><button onClick={handleAllJobs} className='bg-violet-200 rounded-md p-2 my-4'>See All Jobs</button></div>}
        </div>
    );
};

export default FeaturedJobs;