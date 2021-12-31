import React from 'react';

export const Header = React.memo(function ({ children, size }) {
  let fontSize = 'text-xl';

  if (size === 'large') {
    fontSize = 'text-2xl';
  }

  return (
    <header>
      <div className="bg-blue-500 mx-auto p-5">
        <h1 className={`text-center text-white font-semibold ${fontSize}`}>
          {children}
        </h1>
      </div>
    </header>
  );
});
