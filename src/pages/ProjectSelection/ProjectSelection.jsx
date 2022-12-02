import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./ProjectSelection.css";
import { useSelector, useDispatch } from "react-redux";
import { getProjectAction } from "../../store/action/actions";

function ProjectSelection() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    dispatch(getProjectAction());
  }, []);

  useEffect(() => {
    if (data) {
      setHeadings(Object.keys(data));
    }
  }, [data]);

  return (
    <div className="project">
      <Header />
      {headings.map((element, index) => (
        <Link key={element+index}
          to={{
            pathname: `/board/${element}`,
            state: element,
          }}
        >
          <div className="project-card">{element}</div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectSelection;
