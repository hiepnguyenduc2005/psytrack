import Navbar from "../components/NavBar";
import { useState, useEffect, useRef } from "react";
import type { StroopSession, StroopTrial, StroopResult } from "./types";

const COLORS = ["RED", "GREEN", "BLUE", "YELLOW"];
const COLOR_VALUES: Record<string, string> = {
    RED: "red",
    GREEN: "green",
    BLUE: "blue",
    YELLOW: "yellow",
};

export default function StroopTask() {
    const [participantId, setParticipantId] = useState("");
    const [numTrials, setNumTrials] = useState(5);
    const [session, setSession] = useState<StroopSession | null>(null);
    const [currentTrialIndex, setCurrentTrialIndex] = useState(0);
    const [currentTrial, setCurrentTrial] = useState<StroopTrial | null>(null);
    const [trialStartTime, setTrialStartTime] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Start a new session and then the first trial
    const startSession = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `http://localhost:8080/stroop/start?participantId=${participantId}&numTrials=${numTrials}`,
                { method: "POST" }
            );
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Failed to start session: ${res.status} ${text}`);
            }
            const data: StroopSession = await res.json();
            setSession(data);
            setCurrentTrialIndex(0);
            setCurrentTrial(null);
        } catch (err) {
            alert((err as Error).message);
        }
        setLoading(false);
    };

    // Start next trial whenever session and currentTrialIndex change
    useEffect(() => {
        if (session && currentTrialIndex < session.numTrialsRequested) {
            startNextTrial();
        } else if (session && currentTrialIndex >= session.numTrialsRequested) {
            completeSession();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session, currentTrialIndex]);

    // Start a single trial and set a timer to auto-miss after 2 seconds
    const startNextTrial = () => {
        // Clear previous timer if any
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        const trial: StroopTrial = {
            word: COLORS[Math.floor(Math.random() * COLORS.length)],
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
        setCurrentTrial(trial);
        setTrialStartTime(Date.now());

        // Auto-submit missed trial after 2 seconds
        timerRef.current = setTimeout(() => {
            sendResult(null);
        }, 2000);
    };

    // Submit user response or missed trial
    const sendResult = async (response: string | null) => {
        if (!session || !currentTrial || trialStartTime === null) return;

        // Clear timer since user responded or missed timed out
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        const reactionTime = response ? Date.now() - trialStartTime : 0;
        const correct = response === currentTrial.color;
        const missed = response === null;

        const result: StroopResult = {
            sessionId: session.id,
            trial: currentTrial,
            userResponse: response,
            reactionTime,
            correct,
            missed,
        };

        try {
            const res = await fetch(
                `http://localhost:8080/stroop/result?sessionId=${session.id}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(result),
                }
            );
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Failed to send result: ${res.status} ${text}`);
            }
        } catch (err) {
            alert((err as Error).message);
        }

        setCurrentTrialIndex((prev) => prev + 1);
        setCurrentTrial(null);
        setTrialStartTime(null);
    };

    // Complete session
    const completeSession = async () => {
        if (!session) return;
        try {
            const res = await fetch(
                `http://localhost:8080/stroop/complete?sessionId=${session.id}`,
                { method: "POST" }
            );
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Failed to complete session: ${res.status} ${text}`);
            }
            alert("Session completed!");
        } catch (err) {
            alert((err as Error).message);
        }
        setSession(null);
        setCurrentTrialIndex(0);
        setCurrentTrial(null);
        setTrialStartTime(null);
    };

    // Cancel session
    const cancelSession = async () => {
        if (!session) return;
        try {
            const res = await fetch(
                `http://localhost:8080/stroop/cancel?sessionId=${session.id}`,
                { method: "POST" }
            );
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Failed to cancel session: ${res.status} ${text}`);
            }
            alert("Session cancelled.");
        } catch (err) {
            alert((err as Error).message);
        }
        setSession(null);
        setCurrentTrialIndex(0);
        setCurrentTrial(null);
        setTrialStartTime(null);
    };

    return (
        <>
            <Navbar />
            <div style={{ padding: "20px", marginTop: "80px" }}>
                {!session ? (
                    <div>
                        <h2>Start Stroop Task</h2>
                        <input
                            placeholder="Participant ID"
                            value={participantId}
                            onChange={(e) => setParticipantId(e.target.value)}
                        />
                        <input
                            type="number"
                            min={1}
                            max={100}
                            value={numTrials}
                            onChange={(e) => setNumTrials(parseInt(e.target.value) || 5)}
                        />
                        <button
                            onClick={startSession}
                            disabled={loading || !participantId.trim()}
                        >
                            Start
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2>
                            Trial {currentTrialIndex + 1} / {session.numTrialsRequested}
                        </h2>
                        {currentTrial ? (
                            <div>
                                <h1
                                    style={{
                                        color: COLOR_VALUES[currentTrial.color],
                                        fontSize: "48px",
                                        userSelect: "none",
                                    }}
                                >
                                    {currentTrial.word}
                                </h1>
                                <div>
                                    {COLORS.map((color) => (
                                        <button
                                            key={color}
                                            style={{ margin: "5px" }}
                                            onClick={() => sendResult(color)}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    style={{ marginTop: "20px", backgroundColor: "lightcoral" }}
                                    onClick={cancelSession}
                                >
                                    Cancel Session
                                </button>
                            </div>
                        ) : (
                            <p>Loading next trial...</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
