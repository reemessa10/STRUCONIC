"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("struconic_cookie_accepted");
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("struconic_cookie_accepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-navy-900 text-white">
      <div className="container-page flex flex-col md:flex-row items-center gap-4 py-4">
        <Cookie className="h-6 w-6 text-gold-400 shrink-0" />
        <p className="text-sm text-navy-100 flex-1 text-center md:text-right">
          نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك على موقعنا. باستمرارك في تصفح الموقع فإنك توافق على استخدامها.
        </p>
        <button onClick={accept} className="bg-gold-500 hover:bg-gold-600 transition-colors text-white text-sm font-heading font-semibold px-6 py-2 rounded-md shrink-0">
          موافق
        </button>
      </div>
    </div>
  );
}
