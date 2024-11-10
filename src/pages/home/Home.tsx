import Links from "../../components/Links";
import Switch from "../../components/Switch";

function Home() {
  return (
    <>
      <Switch />
      <div className=" h-screen flex items-center justify-center dark:bg-[#0c0c0c]">
        <div className="">
          <div className="text-center mb-5 dark:text-white">
            Hello &#x1F44B; I'm
          </div>
          <div className="text-center text-4xl font-bold mb-5 dark:text-white">
            Benedict Kaboyoka
          </div>
          <div>
            <div className="underline dark:text-white">Skills</div>
            <p className="mb-3 dark:text-white">
              Web Development,Mobile Development,Debugging, Problem Solving
            </p>
            <div className="underline dark:text-white">Active Toolset</div>{" "}
            <p className="mb-3 dark:text-white">
              JavaScript, Go ( Learning ), Typescript, React, React Native
            </p>
            <div className="underline dark:text-white">
              Other Toolset (Not actively using)
            </div>{" "}
            <p className="mb-3 dark:text-white">Vue, Python</p>
            <div>
              <span className="underline mr-2 dark:text-white">
                Get In Touch
              </span>
              👇
            </div>
          </div>
          <Links />
        </div>
      </div>
    </>
  );
}

export default Home;
