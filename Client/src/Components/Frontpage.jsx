import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Frontpage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/Register');
  };

  const handleLogin = () => {
    navigate('/Login');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand">DevHub</a>
          <nav className="navbar">
            <div className="container-fluid justify-content-start">
              <button
                className="btn btn-outline-success me-2"
                type="button"
                onClick={handleRegister}
              >
                SIGN UP
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
                onClick={handleLogin}
              >
                LOGIN
              </button>
            </div>
          </nav>
        </div>
      </nav>
      
      <div className="card text-center Frontpage">
        <div className="card-header Frontpage">Featured Article</div>
        <div className="card-body Frontpage">
          <h5 className="card-title">The Future of Web Development</h5>
          <p className="card-text">
            Discover the latest trends in web development, from AI integration to the rise of WebAssembly.
          </p>
          <a href="#" className="btn btn-primary" onClick={() => window.open('https://www.skillvertex.com/blog/what-is-the-future-of-web-development-in-india/',"_blank")}>
            Read More
          </a>
        </div>
      </div>

      {/* <div className="card-body Frontpage">
        <blockquote className="blockquote mb-0 Frontpage">
          <p>
            "Simplicity is the soul of efficiency."
          </p>
          <footer className="blockquote-footer">
            Austin Freeman <cite title="Source Title">Web Architect</cite>
          </footer>
        </blockquote>
      </div> */}

      <div className="card text-center Frontpage">
        <div className="card-header Frontpage">Top Discussions</div>
        <div className="card-body Frontpage">
          <h5 className="card-title">Why TypeScript is the Future</h5>
          <p className="card-text">
            Dive into the benefits of using TypeScript over plain JavaScript in modern web development.
          </p>
          <a href="#" className="btn btn-primary" onClick={() => window.open('https://dev.to/areknawo/is-typescript-the-future-of-web-development-3jl',"_blank")}>
            Join the Discussion
          </a>
        </div>
      </div>
      
      <div className="card text-center Frontpage">
        <div className="card-header Frontpage">Community Highlights</div>
        <div className="card-body Frontpage">
          <h5 className="card-title">Open Source Contributions</h5>
          <p className="card-text">
            Celebrating our community members who have made significant contributions to open source projects.
          </p>
          <a href="#" className="btn btn-primary" onClick={() => window.open('https://opensource.guide/how-to-contribute/',"_blank")}>
            Get Involved
          </a>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
