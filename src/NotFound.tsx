import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex  items-center justify-center">
      <div>
        <p className="text-center mb-5">404 | Not found</p>
        <div className="underline ">
          <Link to="/" className="flex gap-3">
            <ArrowLongLeftIcon className="size-6" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
