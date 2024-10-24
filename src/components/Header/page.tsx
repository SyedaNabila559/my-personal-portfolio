import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center py-5 w-full max-sm:hidden">
      <ul className="relative flex justify-end font-semibold text-xl max-lg:leading-8 max-lg:justify-center items-center p-3 pr-20 max-lg:pr-0 max-lg:p-0 max-lg:text-base max-lg:pb-4">
        <li className="px-8 max-lg:px-4">
          <Link href="/" className="hover:text-color-01 duration-300">
            Home
          </Link>
        </li>
        <li className="px-8 max-lg:px-4 ">
          <Link href="/#Skills" className="hover:text-color-01 duration-300">
            Skills
          </Link>
        </li>
        <li className="px-8 max-lg:px-4 ">
          <Link href="/#Projects" className="hover:text-color-01 duration-300">
            Projects
          </Link>
        </li>
        <li className="px-8 max-lg:px-4 ">
          <Link
            href="/#Contact Us"
            className="hover:text-color-01 duration-300"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}