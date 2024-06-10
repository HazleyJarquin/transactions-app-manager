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
        width: "250px", // Ajuste del ancho
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #e5e7eb",
        backgroundColor: theme === "dark" ? "#f9fafb" : "#333", // Fondo claro
        padding: "20px", // Padding para espaciar el contenido
      }}
    >
      <Link href="/">
        <div
          style={{
            width: "100%",
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4f46e5",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <p style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
            Tapp
          </p>
        </div>
      </Link>

      <div>
        <ToggleButton
          darkButtonText="Dark"
          lightButtonText="Light"
          setTheme={setTheme}
          systemButtonText="System"
        />
      </div>
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
          <NewButton title="hi" />
        </Link>
      </div>
    </div>
  );
}
