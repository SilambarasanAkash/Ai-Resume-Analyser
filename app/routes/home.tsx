import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ai-Resume-Analyser" },
    { name: "description", content: "Welcome to Ai-Resume-Analyser!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
