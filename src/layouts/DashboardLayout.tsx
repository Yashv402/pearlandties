import Header from '@/components/components/Header';
import SideBard from '@/components/components/SideBard';
import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <SideBard />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};