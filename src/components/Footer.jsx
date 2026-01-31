import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 dark:text-zinc-500 text-sm font-mono">
          © {new Date().getFullYear()} Taha Shaikh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;