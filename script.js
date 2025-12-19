* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: system-ui, sans-serif;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

/* BACKGROUND */
.background {
  position: fixed;
  inset: 0;
  background: url("file_00000000b05871f8b90495cba20701df.png") no-repeat center center / cover;
  filter: brightness(0.4);
  z-index: -1;
}

/* HEADER */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  width: 100%;
}

.title-block {
  flex: 1;
  text-align: center;
}

.title-block h1 {
  margin: 0;
  font-size: clamp(1.6rem, 4vw, 2.5rem);
}

#date,
#day-counter {
  margin: 4px 0;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
}

/* ARROWS */
.arrow {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0 10px;
}

/* JUMP CONTROLS */
.jump-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 8px 0;
}

.jump-controls input {
  width: 90px;
  padding: 6px;
  font-size: 1rem;
}

.jump-controls button {
  padding: 6px 14px;
  font-size: 1rem;
  cursor: pointer;
}

/* MAIN CONTENT */
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  max-width: 900px;
  margin: 0 auto;
}

#verse {
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  margin-bottom: 12px;
}

#interpretation {
  font-size: clamp(1rem, 2.6vw, 1.2rem);
  line-height: 1.5;
}

/* NAV MENU */
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  padding: 12px;
}

nav button {
  padding: 8px 12px;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  cursor: pointer;
}

/* MOBILE REFINEMENTS */
@media (max-width: 600px) {
  header {
    padding: 10px;
  }

  .arrow {
    padding: 0 6px;
  }

  main {
    padding: 12px;
  }
}
