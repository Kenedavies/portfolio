import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myWorkData } from "../../util/myWorkData";

export default function MyWorkId() {
  const [data, setData] = useState([]);
  const { myworkId } = useParams();

  useEffect(
    function () {
      fetch(`/src/util/myWorkData/${myworkId}`, {})
        .then((response) => response.json())
        .then((dat) => {
          setData(dat);
        })
        .catch((error) => console.log("--error", error));
    },
    [myworkId]
  );

  console.log("--data", data);
  return (
    <section className="px-3 md:px-6 pt-40 text-white">
      <div className="container mx-auto">
        <h5 className="text-white mb-6">
          <span className="text-[50px] font-saira-bold"> {myworkId}</span>{" "}
          <span className="text-xl ms-1">is an AI powered app for writers</span>
        </h5>
        <h4 className="text-2xl font-saira-bold">Overview</h4>
        <p className="mb-10">
          This is a B2B cloud-based startup that offers a comprehensive platform
          designed to streamline and automate the deployment and management of
          cloud-based services for startups. Cloudsania platform acts as a
          single, unified control center, enabling startups to seamlessly manage
          their cloud infrastructure across multiple providers from a single
          dashboard.
        </p>
        <div className="mb-5">
          <h6 className="font-saira-bold mb-1">Role</h6>
          <ul>
            <li>User Experience (UX) Designer</li>
            <li>User Interface (UI) Designer</li>
            <li>Interaction Designer</li>
          </ul>
        </div>

        <div>
          <h6 className="font-saira-bold mb-1">Tools</h6>
          <ul className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <li
                key={index}
                className="relative first:static w-10 h-10 inline-block -me-2"
              >
                <div className="w-10 h-10 bg-white border border-[#BADB4D] rounded-full"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h5 className="text-white">
        <span className="text-[50px]">Wordshop</span> is an AI powered app for
        writers
      </h5>
      {myWorkData.map((work, index) => (
        <div key={index}>{work.project}</div>
      ))}
      {data}
    </section>
  );
}
