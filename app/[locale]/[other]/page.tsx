import { redirect } from "next/navigation";
import { useLocale } from "next-intl";

function NotFoundPage() {
  const locale = useLocale();
  redirect(`/${locale}`);
  // return <NotFound />;
}

export default NotFoundPage;