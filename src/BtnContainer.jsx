import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => setCurrentItem(index)}
            className={`job-btn ${
              index === currentItem ? "active-btn" : "job-btn"
            }`}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
