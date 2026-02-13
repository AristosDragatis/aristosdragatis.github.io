import { ArrowUp } from "lucide-react";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;
  return (
    <a
      href="#hero"
      className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-lg"
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </a>
  );
};

export default ScrollToTop;
