import React, { useRef, useEffect, useState } from "react";
import { Space, Select } from "antd";
import { Pie } from "@ant-design/plots";
import './style.css';

const Report = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const plotRef = useRef(null);
  const [data, setData] = useState([
    { xField: "0",type: "Hoàn thành trước hạn", value: 27, color: "#04B9A7", visible: true,},
    { xField: "1",type: "Hoàn thành đúng hạn",value: 25,color: "#2275FF",visible: true,},
    { xField: "2",type: "Hoàn thành trễ hạn",value: 18,color: "#F9757E",visible: true,},
    {xField: "3", type: "Chờ duyệt", value: 15, color: "#C327E2", visible: true,},
    {xField: "4",type: "Chưa hoàn thành", value: 10, color: "#A0AEC0", visible: true, },
    {xField: "5",type: "Quán hạn",value: 5,color: "#F1252B", visible: true,},
  ]);

  const config = {
    data: data.filter((item) => item.visible),
    angleField: "value",
    colorField: "xField",
    color: data.filter((item) => item.visible).map((item) => item.color), // Sử dụng mảng màu sắc từ dữ liệu
    appendPadding: [0, 0, 0, 0],
    innerRadius: 0.6,
    width: 250,
    height: 250,
    legend: false,
    tooltip: false ,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "elliptis",
        },
        content: "Tổng\n10",
      },
    },
  };

  const handleClickLegend = (item) => {
    const newData = data.map((dataItem) => {
      if (dataItem.xField === item.xField) {
        return { ...dataItem, visible: !dataItem.visible };
      }
      return dataItem;
    });
    setData(newData);
  };

  const onReady = (plot) => {
    plotRef.current = plot;
  };
  console.log("Check",plotRef.current);

  const renderLegend = () => {
    return (
      <div className="legend">
        {data.map((item) => (
          <div
            key={item.type}
            className="legend-item"
            onClick={() => handleClickLegend(item)}
          >
            <div
              className="legend-color"
              style={{ backgroundColor: item.color }}
            />
            <span className="legend-label">{item.type}</span>
            <span className="legend-value">{item.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Space>
      <div className="Report">
        <div className="title2">
          <p>Báo cáo công việc</p>
          <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
          <span>Tuần này</span>
          <img src="./expand-solid 1.svg" alt="expand-icon" />
        </div>

        <div className="chart-container">
          <div className="chart-graph">
            <Pie {...config} ref={plotRef} onReady={onReady} />
          </div>
          <div>{renderLegend()}</div>
        </div>
      </div>
    </Space>
  );
};

export default Report;
