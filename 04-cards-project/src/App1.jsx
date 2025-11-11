import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import Card from './components/Card';

const App1 = () => {
  const [jobs, setJobs] = useState([]);

  // Function to remove HTML tags from description
  const cleanHTML = (html) => {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://www.arbeitnow.com/api/job-board-api');
        const data = await response.json();
        setJobs(data.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main">
        {jobs.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>Loading jobs...</p>
        ) : (
          jobs.map((job, index) => (
            <Card
              key={index} // it is an iterator
              name={job.company_name}
              info={cleanHTML(job.description)} 
              salary={job.salary || "Not disclosed"}
              location={job.location || "Not specified"}
              url = {job.url || 'NA'}
              logo={`https://logo.clearbit.com/${job.company_name?.toLowerCase().replace(/\s/g, '')}.com`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App1;
