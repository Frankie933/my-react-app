import React from 'react';

export function SokSidan() {
  const pageStyle = {
    backgroundColor: '#f0f8ff',  
    color: 'black',          
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '50px 0',
    margin: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  return (
    <h1 style={pageStyle}>Welcome to Frank music home page</h1>
  );
}
