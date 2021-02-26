import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function BackButton() {
  return (
    <button className="ml-2 btn btn-naked-primary rounded-circle text-primary">
      <FontAwesomeIcon icon={faArrowLeft} size="lg" />
    </button>
  );
}
