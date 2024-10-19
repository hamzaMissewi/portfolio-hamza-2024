import { redirect } from "next/navigation";
import { useLocale } from "next-intl";

function NotFoundPage() {
  const locale = useLocale();
  redirect(`/${locale}`);
}

export default NotFoundPage;
