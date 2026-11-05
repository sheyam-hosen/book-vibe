"use client";

import React, { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Label,
  LabelProps,
  BarShapeProps,
} from "recharts";
import { IBook } from "@/types/books.type";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000", "pink", "black"];

// বাঁকা ও সরু চূড়ার আকৃতি
const getPath = (x: number, y: number, width: number, height: number) => {
  const mid = x + width / 2;
  const base = y + height;
  return `M${x},${base}
          C${x + width * 0.35},${base} ${mid - width * 0.03},${y + height * 0.45} ${mid},${y}
          C${mid + width * 0.03},${y + height * 0.45} ${x + width * 0.65},${base} ${x + width},${base}
          Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;
  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      fill={color}
      stroke="none"
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} fontSize={13} fontWeight={600} />;
};

const ReadBooks = () => {
  const { readBooks }: any = useContext(BooksContext);

  const data = readBooks.map((books: IBook, index: number) => {
    return {
      name: books.bookName,
      uv: books.totalPages,
      pv: index + 1,
      amt: index + 1,
    };
  });

  return (
    <div className="container mx-auto my-5">
      {readBooks.length > 0 ? (
        <BarChart
          style={{ width: "100%", maxWidth: "700px", maxHeight: "70vh", aspectRatio: 1.618 }}
          responsive
          data={data}
          margin={{ top: 30, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="4 4" stroke="#e5e5e5" />
          <Tooltip cursor={{ fillOpacity: 0.2 }} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#999", fontSize: 12 }}
          />
          <YAxis
            width="auto"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#999", fontSize: 12 }}
          />
          <Bar dataKey="uv" shape={TriangleBar} maxBarSize={110} activeBar>
            <LabelList content={CustomColorLabel} position="top" />
          </Bar>
        </BarChart>
      ) : (
        <p className="font-bold text-4xl text-center">No read books to display</p>
      )}
    </div>
  );
};

export default ReadBooks;