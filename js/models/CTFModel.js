// Model: responsible only for fetching/holding CTF log data.
// To add a new CTF, just add an entry to data/ctf.json — no code changes needed.
export const CTFModel = {
  async getAll() {
    const res = await fetch("data/ctf.json");
    if (!res.ok) throw new Error("Failed to load ctf.json");
    const data = await res.json();
    // Most recent first
    return data.sort((a, b) => (a.date < b.date ? 1 : -1));
  }
};
