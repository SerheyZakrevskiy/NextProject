"use client";

import { useEffect, useState } from "react";

type ConsentValue = "accepted" | "rejected";

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days = 180) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value,
  )}; expires=${expires}; path=/; SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const v = getCookie("cookie_consent");
    if (!v) setVisible(true);
  }, []);

  const onChoose = (value: ConsentValue) => {
    setCookie("cookie_consent", value, 180);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-[9999] px-4">
      <div className="mx-auto max-w-[1024px] rounded-xl border bg-white/95 p-4 shadow-md backdrop-blur dark:bg-black/80">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm">
            <p className="font-medium">Cookies</p>
            <p className="opacity-80">
              We use essential cookies for authentication and a preferences
              cookie to store your consent choice.{" "}
              <a className="underline" href="/privacy">
                Learn more
              </a>
              .
            </p>
          </div>

          <div className="flex gap-2">
            <button
              className="rounded-lg border px-3 py-2 text-sm"
              onClick={() => onChoose("rejected")}
            >
              Reject
            </button>
            <button
              className="rounded-lg bg-black px-3 py-2 text-sm text-white dark:bg-white dark:text-black"
              onClick={() => onChoose("accepted")}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
