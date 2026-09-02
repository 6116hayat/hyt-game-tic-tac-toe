// import { useState } from "react";
// import { WelcomeScreen } from "./components/game/WelcomeScreen";
// import { BackgroundParticles } from "./components/ui/BackgroundParticles";

// function App() {
//   const [currentScreen, setCurrentScreen] = useState<"welcome" | "setup">(
//     "welcome",
//   );

//   const handlePlay = () => {
//     setCurrentScreen("setup");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
//       <BackgroundParticles />

//       {currentScreen === "welcome" ? (
//         <WelcomeScreen onPlay={handlePlay} />
//       ) : (
//         <div className="text-white text-center">
//           <h2 className="text-3xl">Setup Screen Coming Soon</h2>
//           <button
//             onClick={() => setCurrentScreen("welcome")}
//             className="mt-4 text-purple-400 hover:text-purple-300"
//           >
//             ← Back
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { WelcomeScreen } from "./components/game/WelcomeScreen";
import { BackgroundParticles } from "./components/ui/BackgroundParticles";

function App() {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "setup">(
    "welcome",
  );

  const handlePlay = () => {
    setCurrentScreen("setup");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      {/* Background */}
      <BackgroundParticles />

      {/* Main content */}
      <div className="relative z-10">
        {currentScreen === "welcome" ? (
          <WelcomeScreen onPlay={handlePlay} />
        ) : (
          <div className="text-white text-center">
            <h2 className="text-3xl">Setup Screen Coming Soon</h2>

            <button
              onClick={() => setCurrentScreen("welcome")}
              className="mt-4 text-purple-400 hover:text-purple-300"
            >
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
