"use client";

import { useLoginStore } from "@/store/useLoginStore.store";
import { Graph } from "hazley-ui";
import React from "react";

export default function Dashboard() {
  const { id, password } = useLoginStore();
  const token = Buffer.from(`${id}:${password}`, "utf8").toString("base64");
  console.log("token", token);
  const data = [
    { name: "Ene", uv: 400, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
    { name: "Marz", uv: 200, pv: 9800, amt: 2290 },
    { name: "Abril", uv: 278, pv: 3908, amt: 2000 },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Graph data={data} />
      </div>
    </div>
  );
}
