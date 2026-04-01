import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#101727] text-neutral-content py-10 px-5 md:px-48">
  <aside>
        <h1 className='text-4xl font-bold'>
            DigiTools
        </h1>
      <p>
      Premium digital tools for <br /> creators, professionals, and businesses. <br /> Work smarter with our suite of powerful tools.
    </p>
  </aside>
  
    <nav>
    <h6 className="footer-title">Products</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integration</a>
  </nav>
    <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social links</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <img src="/src/assets/Instagram.png" alt="" />
      </a>
      <a>
        <img src="/src/assets/Facebook.png" alt="" />
      </a>
      <a>
        <img src="/src/assets/Twitter.png" alt="" />
      </a>
      
    </div>
  </nav>
</footer>

<footer className="footer sm:footer-horizontal bg-[#101727] text-neutral-content items-center p-4 md:px-48 border-t border-[#ffffff31]">
  <aside className="grid-flow-col items-center ">

    <p >Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      Privacy Policy                      
    </a>
    <a>
      Terms of Service
    </a>
    <a>
      Cookies
    </a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;