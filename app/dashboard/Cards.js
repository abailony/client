'use client';

import React, { useState, useEffect } from 'react';
import { WobbleCard } from '@/components/ui/wobble-card';
import Portal from '@/components/ui/Portal';

// Modal Component
const Modal = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <button onClick={handleClose} className="close-btn">
        Close
      </button>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default function WobbleCardDemo() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-4">
      {/* First Card */}
      <div
        className="col-span-1 md:col-span-2 min-h-[300px] md:min-h-[400px]"
        onClick={() => (window.location.href = "/try")}
      >
        <WobbleCard containerClassName="bg-pink-800 w-full h-full" className="relative overflow-hidden">
          <div className="max-w-xs md:max-w-sm">
            <h2 className="text-left text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-[-0.015em] text-white">
              Ads
            </h2>
            <p className="mt-4 text-left text-sm sm:text-base text-neutral-200">Take A look at all your Ads.</p>
          </div>
        </WobbleCard>
      </div>

      {/* Second Card */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-[-0.015em] text-white">
          Leads
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-sm sm:text-base text-neutral-200">
          All your Leads Here In one Place
        </p>
      </WobbleCard>

      {/* Third Card with Modal Trigger */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 min-h-[400px] md:min-h-[300px]" onClick={() => (window.location.href = "/campaigns")}>
        <WobbleCard containerClassName="w-full h-full bg-blue-900">
          <div className="max-w-sm md:max-w-md lg:max-w-lg">
            <h2 className="text-left text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-[-0.015em] text-white">
              Campaigns
            </h2>
            <p className="mt-4 text-left text-sm sm:text-base text-neutral-200">Access All your Campaigns</p>
          </div>
        </WobbleCard>
      </div>

      {/* Modal */}
      {/* {isModalOpen && (
        <Portal>
          <Modal handleClose={() => setModalOpen(false)} isOpen={isModalOpen}>
            This is Modal Content!
          </Modal>
        </Portal>
      )} */}
    </div>
  );
}
