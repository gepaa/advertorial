import { Link } from "react-router-dom";

export default function StickyMobileButton() {
  return (
    <Link
      to="/offer?openModal=true"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary text-primary-foreground p-4 w-full"
    >
      <button className="w-full cta-primary py-3 font-bold text-lg tracking-wide rounded-lg bg-primary border-0">
        CHECK AVAILABILITY →
      </button>
    </Link>
  );
}
