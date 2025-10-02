import MyPhoto from "../../assets/photo.jpg";
import Links from "../../components/Links";

export default function Header() {
  return (
    <div className="mb-10">
      <div className="flex flex-row gap-5">
        <div>
          <img src={MyPhoto} alt="photo" width={200} height={200} />
        </div>
        <div className="flex flex-col">
          <div className="text-center text-5xl mb-5 dark:text-white">
            Benedict Kaboyoka
          </div>
          <div className="text-3xl text-gray-600 mb-5">Front-End Engineer</div>
          <div>
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}
