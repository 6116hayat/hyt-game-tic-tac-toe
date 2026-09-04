import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "../../animations/variants";
import { randomNames } from "../../data/randomNames";

interface SetupScreenProps {
  onComplete: (player1Name: string, player2Name: string) => void;
  onBack: () => void;
}

export function SetupScreen({ onComplete, onBack }: SetupScreenProps) {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const [errors, setErrors] = useState<{
    player1?: string;
    player2?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const player1InputRef = useRef<HTMLInputElement>(null);
  const player2InputRef = useRef<HTMLInputElement>(null);

  const MAX_NAME_LENGTH = 20;

  const getRandomName = (otherName?: string) => {
    const availableNames = randomNames.filter(
      (name) => name.trim().toLowerCase() !== otherName?.trim().toLowerCase(),
    );

    if (availableNames.length === 0) {
      return randomNames[Math.floor(Math.random() * randomNames.length)];
    }

    return availableNames[Math.floor(Math.random() * availableNames.length)];
  };

  const setRandomPlayer1Name = () => {
    setPlayer1Name(getRandomName(player2Name));

    setErrors((prev) => ({
      ...prev,
      player1: undefined,
    }));
  };

  const setRandomPlayer2Name = () => {
    setPlayer2Name(getRandomName(player1Name));

    setErrors((prev) => ({
      ...prev,
      player2: undefined,
    }));
  };

  useEffect(() => {
    player1InputRef.current?.focus();
  }, []);

  const validate = (): boolean => {
    const newErrors: {
      player1?: string;
      player2?: string;
    } = {};

    const name1 = player1Name.trim();
    const name2 = player2Name.trim();

    if (!name1) {
      newErrors.player1 = "Name is required";
    } else if (name1.length < 2) {
      newErrors.player1 = "Minimum 2 characters";
    } else if (name1.length > MAX_NAME_LENGTH) {
      newErrors.player1 = `Maximum ${MAX_NAME_LENGTH} characters`;
    }

    if (!name2) {
      newErrors.player2 = "Name is required";
    } else if (name2.length < 2) {
      newErrors.player2 = "Minimum 2 characters";
    } else if (name2.length > MAX_NAME_LENGTH) {
      newErrors.player2 = `Maximum ${MAX_NAME_LENGTH} characters`;
    }

    if (name1 && name2 && name1.toLowerCase() === name2.toLowerCase()) {
      newErrors.player2 = "Names must be different";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitForm = () => {
    if (isSubmitting) return;

    if (!validate()) {
      const name1 = player1Name.trim();
      const name2 = player2Name.trim();

      if (!name1 || name1.length < 2 || name1.length > MAX_NAME_LENGTH) {
        player1InputRef.current?.focus();
      } else if (
        !name2 ||
        name2.length < 2 ||
        name2.length > MAX_NAME_LENGTH ||
        name1.toLowerCase() === name2.toLowerCase()
      ) {
        player2InputRef.current?.focus();
      }

      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      onComplete(player1Name.trim(), player2Name.trim());

      setIsSubmitting(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: "player1" | "player2",
  ) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    if (field === "player1") {
      player2InputRef.current?.focus();
    } else {
      submitForm();
    }
  };

  const setDefaultNames = () => {
    setPlayer1Name("Player X");
    setPlayer2Name("Player O");
    setErrors({});
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInUp}
      className="w-full max-w-lg"
    >
      <Card
        glow
        className="
          rounded-3xl
          border border-white/10
          bg-gray-900/75
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <div className="p-6 sm:p-8">
          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Player Setup
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Enter a name for each player
            </p>
          </motion.div>

          <form onSubmit={handleSubmit}>
            {/* Player 1 */}
            <motion.div variants={slideInLeft} className="mb-6">
              <div className="flex items-start gap-3">
                <div
                  className="
                    mt-1
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-pink-500/10
                    text-sm font-bold
                    text-pink-400
                    border border-pink-400/20
                  "
                >
                  X
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-2">
                    <div className="min-w-0 flex-1">
                      <Input
                        ref={player1InputRef}
                        label="Player 1"
                        placeholder="Enter name..."
                        value={player1Name}
                        onChange={(e) => {
                          setPlayer1Name(e.target.value);

                          if (errors.player1) {
                            setErrors((prev) => ({
                              ...prev,
                              player1: undefined,
                            }));
                          }
                        }}
                        onKeyDown={(e) => handleKeyDown(e, "player1")}
                        error={errors.player1}
                        maxLength={MAX_NAME_LENGTH}
                        className="text-base"
                      />

                      <div className="mt-1 text-right">
                        <span
                          className={`text-xs ${
                            player1Name.length >= MAX_NAME_LENGTH - 2
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }`}
                        >
                          {player1Name.length}/{MAX_NAME_LENGTH}
                        </span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={setRandomPlayer1Name}
                      className="
                        mt-7
                        h-10
                        shrink-0
                        rounded-xl
                        px-3
                      "
                      title="Random name"
                    >
                      🎲
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* VS */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-xs font-semibold text-gray-500">VS</span>

              <div className="h-px flex-1 bg-white/10" />
            </motion.div>

            {/* Player 2 */}
            <motion.div variants={slideInRight} className="mb-8">
              <div className="flex items-start gap-3">
                <div
                  className="
                    mt-1
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-sm font-bold
                    text-blue-400
                    border border-blue-400/20
                  "
                >
                  O
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-2">
                    <div className="min-w-0 flex-1">
                      <Input
                        ref={player2InputRef}
                        label="Player 2"
                        placeholder="Enter name..."
                        value={player2Name}
                        onChange={(e) => {
                          setPlayer2Name(e.target.value);

                          if (errors.player2) {
                            setErrors((prev) => ({
                              ...prev,
                              player2: undefined,
                            }));
                          }
                        }}
                        onKeyDown={(e) => handleKeyDown(e, "player2")}
                        error={errors.player2}
                        maxLength={MAX_NAME_LENGTH}
                        className="text-base"
                      />

                      <div className="mt-1 text-right">
                        <span
                          className={`text-xs ${
                            player2Name.length >= MAX_NAME_LENGTH - 2
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }`}
                        >
                          {player2Name.length}/{MAX_NAME_LENGTH}
                        </span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={setRandomPlayer2Name}
                      className="
                        mt-7
                        h-10
                        shrink-0
                        rounded-xl
                        px-3
                      "
                      title="Random name"
                    >
                      🎲
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div variants={scaleIn} className="space-y-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Starting...
                  </span>
                ) : (
                  "Continue →"
                )}
              </Button>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={onBack}
                  className="flex-1 rounded-xl"
                >
                  ← Back
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={setDefaultNames}
                  className="flex-1 rounded-xl"
                >
                  Demo Names
                </Button>
              </div>
            </motion.div>
          </form>

          <p className="mt-5 text-center text-xs text-gray-600">
            Press Enter to continue
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
