export interface StroopSession {
    id: string; // sessionId
    participantId: string;
    startTime: number;
    endTime?: number;
    numTrialsRequested: number;
    numTrialsCompleted: number;
    status: string; // "IN_PROGRESS", "COMPLETED", "CANCELLED"
}

export interface StroopTrial {
    word: string;
    color: string;
}

export interface StroopResult {
    sessionId: string;
    trial: StroopTrial;
    userResponse: string | null;
    reactionTime: number;
    correct: boolean;
    missed: boolean;
}
