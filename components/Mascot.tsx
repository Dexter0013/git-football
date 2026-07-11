"use client";

import { memo } from "react";

// GitFut mascot — the real logo asset (public/mascot.png): the Octocat-as-
// footballer kicking the WC26 ball. Rendered as-is; `animate` adds a gentle
// float (used on the hero/loading screen).
interface MascotProps {
  size?: number | string;
  className?: string;
  animate?: boolean;
  /** @deprecated ball is baked into the asset; kept for call-site compatibility */
  kick?: boolean;
  /** @deprecated ball is baked into the asset; kept for call-site compatibility */
  ball?: boolean;
}

function Mascot({ size, className, animate = true }: MascotProps) {
  return (
    <img
      src="/mascot.png"
      alt="GitFut mascot — an octopus footballer kicking the World Cup 26 ball"
      width={typeof size === "number" ? size : undefined}
      height={typeof size === "number" ? size : undefined}
      className={`${animate ? "animate-float" : ""} ${className ?? ""}`}
      style={{
        width: size ?? undefined,
        height: size ?? undefined,
        objectFit: "contain",
        display: "block",
      }}
    />
  );
}

export default memo(Mascot);
