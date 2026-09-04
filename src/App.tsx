import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { WelcomeScreen } from "./components/game/WelcomeScreen";
import { SetupScreen } from "./components/game/SetupScreen";
import { BackgroundParticles } from "./components/ui/BackgroundParticles";

type Screen = "welcome" | "setup" | "mode" | "game";

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");

  const [playerNames, setPlayerNames] = useState({
    player1: "",
    player2: "",
  });

  const handlePlay = () => {
    setCurrentScreen("setup");
  };

  const handleSetupComplete = (player1Name: string, player2Name: string) => {
    setPlayerNames({
      player1: player1Name,
      player2: player2Name,
    });

    setCurrentScreen("mode");
  };

  const handleBack = () => {
    setCurrentScreen("welcome");
  };

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-gray-950
        via-purple-950
        to-gray-950
        flex
        items-center
        justify-center
        p-4
      "
    >
      {/* Background particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundParticles />
      </div>

      {/* Subtle ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -left-32
          h-72
          w-72
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-72
          w-72
          rounded-full
          bg-pink-500/10
          blur-3xl
        "
      />

      {/* Main content */}
      <main
        className="
          relative
          z-10
          flex
          w-full
          items-center
          justify-center
        "
      >
        <AnimatePresence mode="wait">
          {currentScreen === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="w-full flex justify-center"
            >
              <WelcomeScreen onPlay={handlePlay} />
            </motion.div>
          )}

          {currentScreen === "setup" && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="w-full flex justify-center"
            >
              <SetupScreen
                onComplete={handleSetupComplete}
                onBack={handleBack}
              />
            </motion.div>
          )}

          {currentScreen === "mode" && (
            <motion.div
              key="mode"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="
                w-full
                max-w-md
                rounded-3xl
                border
                border-white/10
                bg-gray-900/70
                p-8
                text-center
                shadow-2xl
                backdrop-blur-xl
              "
            >
              <h2 className="text-2xl font-bold text-white">
                Choose Game Mode
              </h2>

              <p className="mt-3 text-sm text-purple-200/70">
                {playerNames.player1} <span className="text-gray-500">vs</span>{" "}
                {playerNames.player2}
              </p>

              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-purple-400/20
                    bg-purple-500/10
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-purple-500/20
                  "
                >
                  Classic Mode
                </button>

                <button
                  type="button"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-gray-200
                    transition
                    hover:bg-white/10
                  "
                >
                  Quick Match
                </button>
              </div>

              <button
                type="button"
                onClick={() => setCurrentScreen("setup")}
                className="
                  mt-5
                  text-sm
                  text-purple-400
                  transition
                  hover:text-purple-300
                "
              >
                ← Back
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
