import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ width: "100%", height: "100vh", display: "flex", gap: "10px" }}
    >
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "80%" }}>{children}</div>
    </div>
  );
}
