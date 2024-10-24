/**Nav Bar Component Using Tailwind CSS */
import notFound from "./static/img/404.gif";
function NoPage() {
  /**NavBar DaisyUI Component */
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img src={notFound} alt="404" className="" />
            <p className="py-6">The page you are looking for does not exist.</p>
            <a href="/" className="btn btn-primary">
              Get Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoPage;
