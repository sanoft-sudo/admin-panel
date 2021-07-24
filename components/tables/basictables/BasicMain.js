import React from "react";
import BasicTable1 from "./BasicTable1";
import BasicTableStripped from "./BasicTableStripped";
import BasicTableStrippedHoverable from "./BasicTableStrippedHoverable";
import BasicTableBordered from "./BasicTableBordered";
const BasicMain = () => {
  const data = [
    {
      id: "basic1",
      name: "Sanjar Juraev",
      occupation: "Frontend dev",
      email: "sanjar.juraev0409@gmail.com",
    },
    {
      id: "basic1.1",
      name: "Rasulov Komil",
      occupation: "Backend dev",
      email: "example@gmail.com",
    },
    {
      id: "basic1.2",
      name: "Egamberdiyev Sardor",
      occupation: "Backend dev",
      email: "example@gmail.com",
    },
    {
      id: "basic1.3",
      name: "Tuxtasinov Nurmuhammad",
      occupation: "Backend dev",
      email: "example@gmail.com",
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <BasicTable1 data={data} />
        </div>
        <div className="col-md-6 col-sm-12">
          <BasicTableStripped data={data} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <BasicTableStrippedHoverable data={data} />
        </div>
        <div className="col-md-6 col-sm-12">
          <BasicTableBordered data={data} />
        </div>
      </div>
    </div>
  );
};

export default BasicMain;
