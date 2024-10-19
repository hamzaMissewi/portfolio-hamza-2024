import { useLocale } from "next-intl";
import { redirect } from "@/lib/intl";

// import { redirect } from "next/navigation";

function NotFoundPage() {
  const locale = useLocale();
  redirect(`/${locale}`);
}

export default NotFoundPage;
