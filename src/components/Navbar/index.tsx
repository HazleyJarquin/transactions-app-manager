"use client";

import { ToggleButton } from "hazley-ui";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "2px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ marginLeft: "60px" }}>
        <p style={{ fontWeight: "bold" }}>Tapp</p>
      </div>

      <div style={{ marginRight: "60px" }}>
        <ToggleButton
          darkButtonText="Dark"
          lightButtonText="Light"
          setTheme={setTheme}
          systemButtonText="System"
        />
      </div>
    </div>
  );
};
