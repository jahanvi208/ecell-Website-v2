import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [size, setSize] = useState(24); // Normal size of the cursor
  const [isClicked, setIsClicked] = useState(false); // Track if the cursor is clicked

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    // Function to move the cursor
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Function to handle mouse down event
    const handleMouseDown = () => {
      setIsClicked(true);
      setSize(22); // Decrease size on click
    };

    // Function to handle mouse up event
    const handleMouseUp = () => {
      setIsClicked(false);
      setSize(24); // Return to normal size on mouse up
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      style={{
        position: 'fixed',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: 'yellow',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        transition: 'width 0.2s ease, height 0.2s ease', // Smooth transition
      }}
    />
  );
};

export default Cursor;
