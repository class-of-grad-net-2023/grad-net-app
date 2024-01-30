// Pagination.js
import React from "react";

const Nexting = ({ Albumnumber, Total, Page, Nexts }) => {
  const totalPages = Math.ceil(Total / Albumnumber);


  return (
    <nav>
      <div className="Next">
        {Page > 1 && (
          <div className="preview">
            <a
              onClick={() => Nexts(Page - 1)}
              href="#!"
              className="Next-button"
            >
              {"<"}
            </a>
          </div>
        )}

        {Page < totalPages && (
          <div className="next">
            <a
              onClick={() => Nexts(Page + 1)}
              href="#!"
              className="Next-button"
            >
              {">"}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nexting;