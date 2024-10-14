import Image from "next/image";

export default function NotFound() {
  return (
    // <body className="text-center">
    <div>
      <h1 className="mt-10 font-semibold">Something went wrong!</h1>
      <div className="h-40 w-40 mx-auto">
        <Image src={"/hamza/spinner.svg"} width={200} height={200} alt="spinner" />
      </div>
    </div>
  );
}
