import Switch from "../../components/Switch";
import Header from "../header/Header";

function Home() {
  return (
    <>
      <Switch />
      <div className=" h-screen flex items-center justify-center dark:bg-[#0c0c0c]">
        <div>
          <Header />
          <div>
            <div className="underline dark:text-white">Skills</div>
            <p className="mb-3 dark:text-white">
              Web Development,Mobile Development,Debugging, Problem Solving,
              Drone Pilot
            </p>
            <div className="underline dark:text-white">Active Toolset</div>{" "}
            <p className="mb-3 dark:text-white">
              JavaScript, Go ( Learning ), Typescript, React, React Native
            </p>
            <div className="underline dark:text-white">
              Other Toolset (Not actively using)
            </div>{" "}
            <p className="mb-3 dark:text-white">Vue, Python</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
