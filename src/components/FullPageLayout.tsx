import React from 'react';

interface FullPageLayoutProps {
  children: React.ReactNode;
}

const FullPageLayout: React.FC<FullPageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 font-display text-slate-800 dark:text-slate-200 flex flex-col">
      {children}
    </div>
  );
};

export default FullPageLayout;

