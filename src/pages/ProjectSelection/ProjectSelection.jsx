import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./ProjectSelection.css";
import { useSelector, useDispatch } from "react-redux";
import { getProjectAction } from "../../store/action/actions";
import CloseSVG from "../../svg/CloseSVG";

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

  const deleteProject = () => {
    alert("Функционал скоро реализую");
  };

  return (
    <>
      <Header />
      <div className="project">
        {headings.map((element, index) => (
          <div key={element + index} className="project-card">
            <div>
              <h4 className="card-title">Название проекта</h4>
              <p>
                <Link
                  className="project-link"
                  to={{
                    pathname: `/board/${element}`,
                    state: element,
                  }}
                >
                  {element}
                </Link>
              </p>
            </div>
            <div
              className="close-icon-container"
              onClick={() => {
                deleteProject();
              }}
            >
              <CloseSVG />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectSelection;
