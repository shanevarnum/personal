import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const TIMELINE = [
  {
    data: "2017-10-15",
    status: "status",
    statusB: "Internship as a BA at Xerox Business Solutions",
    statusE: "Admission Open",
  },
  {
    data: "2018-06-01",
    status: "status",
    statusB: "Internship at Citi as a Technology Analyst",
    statusE: "Open for Fillup",
  },
  {
    data: "2018-12-10",
    status: "status",
    statusB: "Graduated with a B.S. in MIS from USF",
    statusE: "process",
  },
  {
    data: "2019-01-01",
    status: "status",
    statusB: "Signed up for a contract with Pwc doing Application Support",
    statusE: "Done",
  },
  {
    data: "2019-08-01",
    status: "status",
    statusB:
      "Admitted to two year rotational program at Citi - Production Support Engineer",
    statusE: "Done",
  },
  {
    data: "2021-06-05",
    status: "status",
    statusB: "Took on a new position as App Development Analyst.",
    statusE: "Done",
  },
  {
    data: "2021-10-15",
    status: "status",
    statusB: "Left Citi to pursue software development work full time",
    statusE: "Done",
  },
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1,
    };
  }

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = TIMELINE[curIdx].statusB;
    const prevStatus = prevIdx >= 0 ? TIMELINE[prevIdx].statusB : "";

    return (
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-2">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-10 mt-2 text-white">
            {" "}
            Timeline{" "}
          </h1>
          <div
            style={{
              width: "80%",
              height: "100px",
              margin: "0 auto",
              marginTop: "10px",
              fontSize: "12px",
            }}
          >
            <HorizontalTimeline
              styles={{
                //background: "#f8f8f8",
                foreground: "#1A79AD",
                outline: "#dfdfdf",
              }}
              index={this.state.curIdx}
              indexClick={(index) => {
                const curIdx = this.state.curIdx;
                this.setState({ curIdx: index, prevIdx: curIdx });
              }}
              values={TIMELINE.map((x) => x.data)}
            />
          </div>
          <div className="text-center">
            {/* Previous:-{prevStatus} - Current Select:-{curStatus} */}
            {curStatus}
          </div>
        </div>
      </div>
    );
  }
}
