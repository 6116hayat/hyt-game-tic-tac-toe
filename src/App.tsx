import { motion } from "motion/react";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlayerBadge } from "./components/game/PlayerBadge";
import { fadeInUp, scaleIn, fadeIn } from "./animations/variants";
import { Divider } from "./components/game/Divider";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full max-w-md"
      >
        <Card glow className="text-center">
          <motion.div variants={fadeInUp}>
            <div className="flex justify-center gap-4 mb-6">
              <PlayerBadge name="Player 1" symbol="X" />
              <PlayerBadge name="Player 2" symbol="O" />
            </div>

            <Divider className="mb-6" />

            <h1 className="text-6xl font-display font-bold text-white mb-2 tracking-wider">
              TIC TAC TOE
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6" />

            <p className="text-purple-200 text-lg font-light tracking-wide mb-8">
              A simple game. <br className="sm:hidden" />A serious rivalry.
            </p>

            <motion.div variants={scaleIn}>
              <Button
                variant="primary"
                size="lg"
                className="w-full max-w-xs mx-auto"
              >
                Play Game
              </Button>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-6 flex justify-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </motion.div>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}

export default App;
