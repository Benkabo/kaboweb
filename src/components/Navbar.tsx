function Navbar() {
  return (
    <>
      <div className="m-5">
        <div className="flex gap-5 float-end">
          <div className="hover:cursor-pointer duration-150 hover:scale-105 hover:border-b-2 border-black ease-in-out">
            <a href="https://twitter.com/kabo_ben" target="_blank">
              Twitter
            </a>
          </div>
          <div className="hover:cursor-pointer duration-150 hover:scale-105 hover:border-b-2 border-black ease-in-out">
            <a href="www.linkedin.com/in/benedictkaboyoka" target="_blank">
              Linkedin
            </a>
          </div>
          <div className="hover:cursor-pointer duration-150 hover:scale-105 hover:border-b-2 border-black ease-in-out">
            <a href="https://github.com/Benkabo" target="_blank">
              Github
            </a>
          </div>
          <div className="hover:cursor-pointer duration-150 hover:scale-105 hover:border-b-2 border-black ease-in-out">
            <a
              href="https://drive.google.com/file/d/1bkHjDAM5by2BcqQhCIw5tNthgDH3gsP7/view?usp=drive_link"
              target="_blank"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
