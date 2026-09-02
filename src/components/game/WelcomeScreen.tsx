import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { fadeInUp, scaleIn, staggerChildren } from "../../animations/variants";

interface WelcomeScreenProps {
  onPlay: () => void;
}

export function WelcomeScreen({ onPlay }: WelcomeScreenProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="w-full max-w-md"
    >
      <Card glow className="text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Animated Title */}
          <motion.div variants={fadeInUp} className="mb-2">
            <div className="flex justify-center gap-1 text-7xl font-display font-bold tracking-wider">
              {["T", "I", "C"].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, rotate: -10 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="text-purple-400"> </span>
              {["T", "A", "C"].map((letter, i) => (
                <motion.span
                  key={i + 3}
                  initial={{ opacity: 0, y: 20, rotate: 10 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    delay: (i + 3) * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-white hover:text-pink-300 transition-colors"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-2 text-7xl font-display font-bold tracking-wider mb-2"
          >
            {["T", "O", "E"].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8 + i * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
                className="text-white hover:text-purple-300 transition-colors"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto my-4"
          />

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 1.4 }}
            className="text-purple-200 text-lg font-light tracking-wide mb-2"
          >
            A simple game.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 1.6 }}
            className="text-purple-300 text-sm font-light tracking-wider mb-8"
          >
            A serious rivalry.
          </motion.p>

          {/* Play Button */}
          <motion.div variants={scaleIn} transition={{ delay: 1.8 }}>
            <Button
              variant="primary"
              size="lg"
              onClick={onPlay}
              className="w-full max-w-xs mx-auto relative group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>PLAY</span>
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: 2,
                  }}
                >
                  →
                </motion.span>
              </span>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </Button>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 2 }}
            className="mt-6 flex justify-center gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
