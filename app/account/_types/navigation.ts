export const sidebarOptions = [
  { label: "Home", url: "/account" },
  { label: "Reservations", url: "/account/reservations" },
  { label: "Guest Profile", url: "/account/profile" },
] as const;

export type SidebarOption = (typeof sidebarOptions)[number];
