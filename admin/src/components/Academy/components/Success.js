import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Success.scss';

const SuccessToast = memo(({ show, message }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="success-toast"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

SuccessToast.displayName = 'SuccessToast';

export default SuccessToast;
