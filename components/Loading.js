import React from "react";

function Loading({ loading }) {
  return (
    <>
      {loading && (
        <div className="fixed h-screen w-screen bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-28 h-28 flex items-center justify-center rounded-full border-t-transparent bg-white">
            <div className="h-16 w-16 border-2 border-teal-700 rounded-full border-t-transparent animate-spin"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loading;
