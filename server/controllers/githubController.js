import axios from "axios";
import Problem from "../models/problem.js";

const keywords = ["unsolved", "stuck", "crashing", "broken", "not working"];

export const scanGitHub = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/issues?q=is:issue+label:bug+state:open+in:title`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          "User-Agent": "ProblemHunterBot"
        },
      } 
    );

    const issues = response.data.items;
    const problemsToSave = [];

    for (let issue of issues) {
      const text = (issue.title + " " + (issue.body || "")).toLowerCase();
      const matched = keywords.filter((kw) => text.includes(kw));

      if (matched.length > 0) {
        const exists = await Problem.findOne({ url: issue.html_url });
        if (!exists) {
          problemsToSave.push({
            title: issue.title,
            url: issue.html_url,
            platform: "GitHub",
            description: issue.body?.slice(0, 300) || "No description",
            createdAt: new Date(issue.created_at),
            keywordsMatched: matched,
          });
        }
      }
    }

    if (problemsToSave.length > 0) {
      await Problem.insertMany(problemsToSave);
    }

    res.json({ success: true, added: problemsToSave.length });
  } catch (err) {
  console.error("FULL ERROR:", err.response?.data || err.message || err);
  res.status(500).json({ error: "GitHub scan failed" });
}
};
