"use client";

import Link from "next/link";
import { NewButton, ToggleButton } from "hazley-ui";
import NavLinks from "@/components/Sidebar/components/NavLinks";
import { useTheme } from "next-themes";
import { useLoginStore } from "@/store/useLoginStore.store";

export default function Sidebar() {
  const { setTheme, theme } = useTheme();
  const { setAccess, setId, setPassword } = useLoginStore();
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: theme === "dark" ? "hsl(0 0% 10%)" : "#333",
        padding: "20px",
      }}
    >
      <div>
        <ToggleButton
          darkButtonText="Dark"
          lightButtonText="Light"
          setTheme={setTheme}
          systemButtonText="System"
        />
      </div>
      <Link href="/">
        <div
          style={{
            width: "100%",
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            marginBottom: "20px",
            border: "1px solid",
            borderColor: theme === "dark" ? "hsl(0 0% 20%)" : "#f0f0f0",
          }}
        >
          <p style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
            Tapp
          </p>
        </div>
      </Link>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <NavLinks />
      </div>

      <div>
        <Link
          href={"/"}
          onClick={() => {
            setAccess("");
            setId("");
            setPassword("");
          }}
        >
          <NewButton title="Sign Out" />
        </Link>
      </div>
    </div>
  );
}
