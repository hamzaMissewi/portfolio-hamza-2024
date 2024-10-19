import {useLocale} from 'next-intl'
import {redirect} from 'next/navigation'

// import { redirect } from "@/lib/intl";

function NotFoundPage() {
  const locale = useLocale()
  redirect(`/${locale}`)
  // redirect(`/not-found`);
}

export default NotFoundPage
