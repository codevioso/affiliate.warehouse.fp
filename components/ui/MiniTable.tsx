"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export type MiniTableRow = {
  item: string;
  supplier: string;
  last: string;
  current: string;
  trend: "up" | "down" | "flat";
};

type MiniTableProps = {
  rows: MiniTableRow[];
  className?: string;
  /** When true, table fits container without horizontal scroll (compact layout) */
  compact?: boolean;
  /** Dark theme for use on dark backgrounds (e.g. Hero) */
  dark?: boolean;
};

export function MiniTable({ rows, className, compact, dark }: MiniTableProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border shadow-sm",
        compact && "min-w-0",
        !dark && "border-violet-200/40 bg-white",
        dark && "border-slate-600/60 bg-slate-800/90",
        className
      )}
    >
      <div className={compact ? "min-w-0 overflow-hidden" : "overflow-x-auto"}>
        <table className={cn("w-full border-collapse", compact ? "min-w-0 table-fixed" : "min-w-[520px]")}>
          <colgroup>
            {compact && (
              <>
                <col className="w-[32%]" />
                <col className="w-[24%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[16%]" />
              </>
            )}
          </colgroup>
          <thead className={dark ? "bg-slate-700/80" : "bg-violet-50/50"}>
            <tr className={cn("text-left text-[11px] font-semibold", dark ? "text-amber-300/95" : "text-violet-800")}>
              <th className={compact ? "px-2 py-2" : "px-4 py-3"}>Item</th>
              <th className={compact ? "px-2 py-2" : "px-4 py-3"}>Supplier</th>
              <th className={cn(compact ? "px-2 py-2" : "px-4 py-3", "text-right")}>Last</th>
              <th className={cn(compact ? "px-2 py-2" : "px-4 py-3", "text-right")}>Current</th>
              <th className={cn(compact ? "px-2 py-2" : "px-4 py-3", "text-right")}>Trend</th>
            </tr>
          </thead>
          <tbody className={dark ? "divide-y divide-slate-600/60" : "divide-y divide-slate-200/70"}>
            {rows.map((r) => (
              <tr key={`${r.item}-${r.supplier}`} className={compact ? "text-xs" : "text-sm"}>
                <td className={compact ? "px-2 py-2" : "px-4 py-3"}>
                  <div
                    className={cn(
                      "font-semibold",
                      compact && "truncate",
                      dark ? "text-slate-100" : "text-slate-900"
                    )}
                    title={r.item}
                  >
                    {r.item}
                  </div>
                </td>
                <td className={compact ? "px-2 py-2" : "px-4 py-3"}>
                  <div
                    className={cn(compact && "truncate", dark ? "text-slate-400" : "text-slate-700")}
                    title={r.supplier}
                  >
                    {r.supplier}
                  </div>
                </td>
                <td className={cn(compact ? "px-2 py-2" : "px-4 py-3", "text-right", dark ? "text-slate-400" : "text-slate-700")}>
                  {r.last}
                </td>
                <td className={cn(compact ? "px-2 py-2" : "px-4 py-3", "text-right font-semibold", dark ? "text-white" : "text-slate-900")}>
                  {r.current}
                </td>
                <td className={compact ? "px-2 py-2" : "px-4 py-3"}>
                  <div className="text-right">
                    <TrendChip trend={r.trend} compact={compact} dark={dark} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TrendChip({
  trend,
  compact,
  dark,
}: {
  trend: MiniTableRow["trend"];
  compact?: boolean;
  dark?: boolean;
}) {
  const base = compact ? "px-1.5 py-0 text-[10px]" : "";
  if (trend === "down") {
    return (
      <Badge
        variant="down"
        className={cn(
          base,
          !dark && "bg-teal-50 text-teal-700 ring-teal-200",
          dark && "bg-teal-500/30 text-teal-200 ring-teal-400/50"
        )}
      >
        <span>↓</span> {!compact && "Down"}
      </Badge>
    );
  }
  if (trend === "up") {
    return (
      <Badge
        variant="up"
        className={cn(
          base,
          !dark && "bg-amber-50 text-amber-700 ring-amber-200",
          dark && "bg-amber-500/30 text-amber-200 ring-amber-400/50"
        )}
      >
        <span>↑</span> {!compact && "Up"}
      </Badge>
    );
  }
  return (
    <Badge
      variant="flat"
      className={cn(
        base,
        !dark && "bg-slate-50 text-slate-600 ring-slate-200",
        dark && "bg-slate-600/60 text-slate-400 ring-slate-500/50"
      )}
    >
      <span>—</span> {!compact && "Flat"}
    </Badge>
  );
}

