import { Request, Response } from "express";

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: "LIVE" | "FT" | "NS";
}

export const getAllMatches = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const matches: Match[] = [
      {
        id: 1,
        homeTeam: "Real Madrid",
        awayTeam: "Barcelona",
        homeScore: 2,
        awayScore: 1,
        status: "LIVE",
      },
    ];

    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
