"use client";

import { ReactNode } from "react";
import { OuterErrorBoundary } from "@/prod-components/OuterErrorBoundary";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <OuterErrorBoundary>{children}</OuterErrorBoundary>;
}
