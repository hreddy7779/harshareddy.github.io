
:root {
  --bg: #0b1120;
  --surface: #151f33;
  --text: #e5edf8;
  --muted: #a6b5c9;
  --accent: #38bdf8;
  --border: #2a3b54;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.7;
}
a { color: inherit; text-decoration: none; }
.container { width: min(1100px, 90%); margin: auto; }
header {
  background: #0b1120ee;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 10;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
}
.logo { font-size: 26px; font-weight: bold; }
span, .eyebrow { color: var(--accent); }
.nav-links { display: flex; gap: 24px; }
.nav-links a:hover { color: var(--accent); }
.hero {
  min-height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 70px 0;
}
.eyebrow { font-size: 13px; letter-spacing: 3px; }
.hero h1 {
  font-size: clamp(38px, 6vw, 68px);
  line-height: 1.15;
  margin: 15px 0;
}
.hero h2 { font-size: 21px; font-weight: 400; }
.hero p { max-width: 700px; color: var(--muted); }
.actions { display: flex; gap: 15px; flex-wrap: wrap; margin-top: 24px; }
.btn {
  display: inline-block;
  background: var(--accent);
  color: #07111f;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
}
.btn:hover { opacity: .85; }
.btn.secondary {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}
.section { padding: 75px 0; scroll-margin-top: 70px; }
.section h2 { font-size: 34px; }
.section > p { max-width: 850px; }
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
}
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 25px;
}
.card h3 { margin-top: 0; }
.card p, .muted { color: var(--muted); }
.tag {
  display: inline-block;
  font-size: 12px;
  border: 1px solid var(--border);
  padding: 3px 10px;
  border-radius: 20px;
}
footer {
  text-align: center;
  padding: 30px 15px;
  border-top: 1px solid var(--border);
  color: var(--muted);
}
@media (max-width: 800px) {
  .cards { grid-template-columns: 1fr; }
  nav { flex-direction: column; gap: 10px; }
  .nav-links { gap: 12px; flex-wrap: wrap; justify-content: center; }
  .hero { min-height: 65vh; }
}
  