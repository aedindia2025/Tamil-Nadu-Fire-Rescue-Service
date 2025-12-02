import React, { useState } from "react";
import "../styles/common.css";
import { IoIosArrowForward } from "react-icons/io";
import { Flame, MessageCircleWarning, Radio, ClockCheck, AlertTriangle, MapPinOff, VideoOff, Droplets } from "lucide-react";
import CommonButton from "../components/CommonButton";

export default function Dashboard() {
  const [hoveredBar, setHoveredBar] = useState(null); // track hovered bar

  const cards = [
    { title: "Today Fire Calls", count: 68, icon: <Flame size={32} /> },
    { title: "Incidents ", count: 53, icon: <MessageCircleWarning size={32} /> },
    { title: "Active Fire Alerts", count: 14, icon: <Radio size={32} /> },
    { title: "Response Time", count: "5 min", icon: <ClockCheck size={32} /> },
  ];

  const alerts = [
    { icon: <Flame size={18} />, label: "Active Fire Alerts", count: 289 },
    { icon: <AlertTriangle size={18} />, label: "High-risk building Alerts", count: 34 },
    { icon: <MapPinOff size={18} />, label: "GPS Device offline", count: 875 },
    { icon: <VideoOff size={18} />, label: "VMS Cameras offline", count: 289 },
    { icon: <Droplets size={18} />, label: "Low water level sensors", count: 289 },
  ];

  const data = [5, 8, 3, 7, 6, 9, 7, 5]; // Example values

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <div className="bg-gray-200 p-4 rounded">
          <h3 className="common-hed">Dashboard - Region wise-new branch </h3>
        </div>
        <CommonButton label="Create New Report" variant="primary" className="comon_btn" />
      </div>

      <div className="dashboard-container">
        {/* Left */}
        <div className="left-col">
          <div className="card-grid">
            {cards.map((c, i) => (
              <div key={i} className="card">
                <div className="card-icon">{c.icon}</div>
                <div className="card-content">
                  <h3 className="card-count">{c.count}</h3>
                  <p className="card-title">{c.title}</p>
                </div>
                <IoIosArrowForward className="card-arrow" />
              </div>
            ))}
          </div>

          <div className="three-column-layout">
            <div className="box-common">
              <div className="barchart common-card-pad">
                <div className="two-column-layout">
                <h5 className="common-subhed">Total VMS Alerts Today</h5>
                <h4 className="count-total">Total <span>69</span></h4>
                </div>
                <div className="chart-bars">
                  {data.map((value, index) => (
                    <div
                      key={index}
                      className="bar-wrapper"
                      onMouseEnter={() => setHoveredBar(index)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* Overall gray background */}
                      <div className="bar-bg">
                        {/* Dark red overlay according to value */}
                        <div
                          className="bar-fill"
                          style={{ height: `${value * 10}px` }}
                        ></div>
                      </div>

                      {/* Tooltip */}
                      {hoveredBar === index && <div className="tooltip">{value}</div>}
                    </div>
                  ))}
                </div>
              </div>


            </div>

            <div className="box-common">
              <div className="barchart common-card-pad">
                <h5 className="common-subhed">Average Response Time</h5>
              </div>
            </div>

            <div className="box-common">
              <div className="barchart common-card-pad">
                <h5 className="common-subhed">Water Level Alerts Today</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="right-col">
          <div className="criticla_hed">
            <h3>CRITICAL ALERTS</h3>
          </div>

          <ul className="space-y">
            {alerts.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between list_item"
              >
                <div className="flex items-center gap-3">
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-label">{item.label}</span>
                </div>
                <span className="item-count">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
