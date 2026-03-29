export const sidebarOptions = [
  { label: "Home", icon: "home", url: "/account" },
  { label: "Reservations", icon: "calendar", url: "/account/reservations" },
  { label: "Guest Profile", icon: "user", url: "/account/profile" },
] as const;

export type SidebarOption = (typeof sidebarOptions)[number];
