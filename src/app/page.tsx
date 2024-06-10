// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Card, ToggleButton, NewButton } from "hazley-ui";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLoginStore } from "@/store/useLoginStore.store";

export default function Home() {
  const { setTheme } = useTheme();
  const { mutateAsync, isSuccess, data, isError, isLoading, error, status } =
    useLogin();
  const { setAccess, setId, setPassword } = useLoginStore();
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    id: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await mutateAsync(credentials);
  };

  useEffect(() => {
    if (data?.access && data?.refresh) {
      setAccess(data?.access);
      setId(credentials.id);
      setPassword(credentials.password);
      router.push("/dashboard");
    }
  }, [data?.access, data?.refresh]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "100%", maxWidth: "20rem" }}>
        <CardHeader>
          <ToggleButton
            darkButtonText="Dark"
            lightButtonText="Light"
            setTheme={setTheme}
            systemButtonText="System"
          />
          <CardTitle> Welcome Back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <Label htmlFor="username" style={{ display: "block" }}>
                  Secret Id
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={credentials.id}
                  onChange={(e) =>
                    setCredentials({ ...credentials, id: e.target.value })
                  }
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <Label htmlFor="password" style={{ display: "block" }}>
                  Secret Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
              </div>
            </div>

            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
            {data?.access && <p>Success: Logged in!</p>}

            <CardFooter>
              <NewButton type="submit" title="Log In" />
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
