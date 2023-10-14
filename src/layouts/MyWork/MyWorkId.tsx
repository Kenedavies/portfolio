import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { myWorkData } from "../../util/myWorkData";

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

        <section className="relative min-h-[200px] bg-white rounded mt-5">
          <div className="w-full h-full absolute top-4 left-2 bg-app-green rounded"></div>
        </section>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-11">
          {[
            {
              title: "Problem Statement",
              content:
                "The rise of self-publishing and the decline of print media have made it more difficult for traditional publishers to turn a profit also the proliferation of online content has made it more difficult for writers to get their work noticed.",
            },
            {
              title: "The Challenge",
              content:
                "Startups often face significant challenges when it comes to deploying and managing cloud-based services. These challenges include manual processes, lack of scalability, and difficulties in staying up-to-date with the latest technologies and security standards. Additionally, handling multiple cloud providers and services can be time-consuming and require a high level of expertise, which is often not feasible for resource-constrained startups.",
            },
          ].flatMap((statement, index) => (
            <div
              key={index}
              className="bg-[#1C1C1C] px-3 md:px-6 py-6 rounded-lg"
            >
              <h4 className="text-2xl font-saira-bold mb-6">
                {statement.title}
              </h4>
              <p>{statement.content}</p>
            </div>
          ))}
        </article>

        <div className="mt-5 mb-8">
          <h4 className="text-2xl font-saira-bold mb-2">Uncovering Problems</h4>
          <p>
            We explored layers of organizational challenges and constraints to
            set the ambition for the project. The core UX challenge was that of
            operational efficiency, and we aimed to tackle that to defragment
            the workflow.
          </p>
        </div>
        <div className="mt-5 mb-8">
          <h4 className="text-2xl font-saira-bold mb-2">Market Research</h4>
          <p>
            engaged in primary research to gain valuable insights into the
            lending market. This involved studying various microenterprises,
            SMEs, groups, and individuals engaged in cloud services. The primary
            objective was to establish a clear connection between user goals and
            business goals . By comprehending how these services are being
            operated, I aimed to achieve a holistic understanding of the market
            landscape and identify opportunities for potential growth and
            improvement.
          </p>
        </div>
      </div>

      {/* <h5 className="text-white">
        <span className="text-[50px]">Wordshop</span> is an AI powered app for
        writers
      </h5>
      {myWorkData.map((work, index) => (
        <div key={index}>{work.project}</div>
      ))}
      {data} */}
    </section>
  );
}
