import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-bg border-t border-primary-border py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[10px] font-mono font-medium text-secondary-text uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Taha Shaikh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;