import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function NotfoundPage() {
  const locale = useLocale();

  // return redirect(`/${locale}`);

  return (
    <div>
      <h1 className="mt-10 font-semibold">404 Something went wrong !</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href={`/${locale}`}>Go back to home</Link>
      <div className="mx-auto h-40 w-40">
        <Image
          src={"/hamza/spinner.svg"}
          width={200}
          height={200}
          alt="spinner"
        />
      </div>
    </div>
  );
}

export default NotfoundPage;
