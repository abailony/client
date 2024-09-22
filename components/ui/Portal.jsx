import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    setPortalElement(document.getElementById('portal-root'));
    setMounted(true);
  }, []);

  return mounted && portalElement ? createPortal(children, portalElement) : null;
};

export default Portal;
