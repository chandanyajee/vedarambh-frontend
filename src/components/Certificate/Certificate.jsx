// import React from "react";

const downloadCertificate = () => {
    
    
    const downloadCertificate = (courseId) => {
          const token = localStorage.getItem('studentToken');
          window.open(`http://localhost:5000/api/student/certificate/${courseId}?token=${token}`, '_blank');
        };

        // <button onClick={() => downloadCertificate(course._id)} className="bg-blue-700 text-white px-3 py-1 rounded mt-2">
        //   Download Certificate
        // </button>
        
        // export default downloadCertificate 

        return(
            <>
            <a
              href={`http://localhost:5000/api/certificate/${courseId}`}
              target="_blank"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Download Certificate
            </a>
    
            </>
);

};

export default downloadCertificate;