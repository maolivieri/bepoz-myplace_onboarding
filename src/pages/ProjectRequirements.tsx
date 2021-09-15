import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IUrlParams {
  id: string;
}

const ProjectRequirements = () => {
  const { id }: IUrlParams = useParams();

  return (
    <div>
      <h1>asdasd</h1>
      <h1>{id}</h1>
      <div>
        <FontAwesomeIcon style={{ color: "red" }} icon="coffee" size="7x" />
      </div>
    </div>
  );
};

export { ProjectRequirements };
