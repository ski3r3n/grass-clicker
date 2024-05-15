import { resetItems } from "@/constants/items";

export const reset = ({ setItems }: any) => {
  setItems(resetItems());
  localStorage.removeItem("grass");
  localStorage.removeItem("grasspersecond");
  localStorage.removeItem("grassperclick");
  localStorage.removeItem("grassclickmultiplier");
  localStorage.removeItem("amt");
  localStorage.removeItem("prices");
  localStorage.removeItem("multipliers");
  localStorage.removeItem("unlocked");
  localStorage.removeItem("saved");
  location.reload();
};