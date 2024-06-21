import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className=" h-screen flex items-center justify-center">
        <div className="">
          <div className="text-center mb-5">Hello &#x1F44B; I'm</div>
          <div className="text-center text-4xl font-bold mb-5">
            Benedict Kaboyoka
          </div>
          <div>
            <div className="underline">Skills</div>
            <p className="mb-3">
              Web Development,Mobile Development,Debugging, Problem Solving
            </p>
            <div className="underline">Active Toolset</div>{" "}
            <p className="mb-3">
              JavaScript, Go ( Learning ), Typescript, React, React Native
            </p>
            <div className="underline">Other Toolset (Not actively using)</div>{" "}
            <p className="mb-3">Vue, Python</p>
            <div>
              <span className="underline mr-2">Get In Touch</span>👇
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
