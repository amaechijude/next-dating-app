import { z } from "zod";

export const google_client_secret = z.string().min(1);
export const google_client_id = z.string().min(1);
export const github_client_secret = z.string().min(1);
export const github_client_id = z.string().min(1);
