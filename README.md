# 🍎 Newtonify Trajectory (`newton-arc`)

> **Visualize Newton’s Apple in motion — right in your terminal!**  
> A CLI-based physics demo that animates projectile motion (the classic Newton apple 🍏) in a glowing yellow arc.

---

## 🌠 Overview

**Newtonify Trajectory** brings physics to your terminal by simulating **projectile motion** — inspired by Isaac Newton’s legendary apple.  
Watch as the apple travels along a smooth **curved trajectory** traced with a glowing **yellow line**, showcasing real physics in action.

> “If I have seen further, it is by standing on the shoulders of giants.” — *Sir Isaac Newton*

---

## 🧠 How It Works

The motion follows the fundamental **kinematics equations** for a projectile:

\[
x = v \cos(\theta) t
\]
\[
y = v \sin(\theta) t - \frac{1}{2} g t^2
\]

Where:
- \( v \) = initial speed  
- \( \theta \) = launch angle  
- \( g \) = acceleration due to gravity  
- \( t \) = time elapsed  

At each frame, the program:
1. Calculates the next (x, y) coordinates.  
2. Renders the apple 🍎 at that position.  
3. Draws a **yellow curved trail** behind it.  
4. Updates the terminal in real time to create the illusion of motion.  

---

## 🖼️ Example Output

Here’s what you’ll see in your terminal 👇

        🍎
       ╱
      ╱
     ╱
    ╱
```

*(A curved yellow line with a moving apple above it — rendered frame by frame!)*

---

## 🚀 Installation

### 1️⃣ Install globally (recommended)
```bash
npm install -g newton-arc
```

### 2️⃣ Run instantly without installing
```bash
npx newton-arc
```

### 3️⃣ Clone & run locally
```bash
git clone https://github.com/Layyzyy/Newtonify_Trajectory.git
cd Newtonify_Trajectory
npm install
node index.js
```

---

## ⚙️ Command Options

Customize your launch parameters directly from the CLI:

```bash
npx newton-arc --speed 25 --angle 60 --gravity 9.8 --step 0.1
```

| Option | Description | Default | Example |
|---------|--------------|----------|----------|
| `--speed` | Initial launch speed (m/s) | 10 | `--speed 20` |
| `--angle` | Launch angle in degrees | 45 | `--angle 60` |
| `--gravity` | Gravity (m/s²) | 9.8 | `--gravity 9.81` |
| `--step` | Time step interval | 0.1 | `--step 0.05` |

---

## 🎨 Features

✅ Animated projectile motion in real time  
✅ Glowing **yellow trajectory curve**  
✅ Physics-accurate motion path  
✅ Adjustable parameters via CLI  
✅ Smooth animation loop using Node.js  
✅ Hidden terminal cursor for a clean view  

---

## 🧩 Dependencies

Make sure you have **Node.js ≥ 14** installed.

This project uses:
- 🟢 [`chalk`](https://www.npmjs.com/package/chalk) → Colorful terminal output  
- 🔵 [`cli-cursor`](https://www.npmjs.com/package/cli-cursor) → Hides cursor during animation  
- 🟣 [`commander`](https://www.npmjs.com/package/commander) → Handles CLI argument parsing

Install locally:
```bash
npm install
```

---

## 🧪 Development Setup

1. Clone this repository  
2. Open `index.js` and tweak parameters for experiments  
3. Run:
   ```bash
   node index.js
   ```
4. (Optional) Publish your own version:
   ```bash
   npm login
   npm version patch
   npm publish
   ```

---

## 🧠 Educational Use

This project can be used for:
- 🚸 Demonstrating projectile motion in classrooms  
- 🧑‍💻 Teaching physics via code  
- 💬 Creating interactive CLI physics demos  
- 🎓 Understanding kinematic equations practically  

---

## 📸 Screenshots
Here’s a quick look at how the Newtonify Trajectory simulation works 🚀
![Newtonify Trajectory Demo](https://github.com/Layyzyy/Newtonify_Trajectory/blob/main/assets/output.png?raw=true)
*(The apple follows a realistic projectile motion curve, showing gravity’s effect in real time!)*


---

## 🧑‍💻 Author

**👩‍🚀 Layyshahh**  
✨ GitHub: [@Layyzyy](https://github.com/Layyzyy)  
🚀 Project: [Newtonify Trajectory](https://github.com/Layyzyy/Newtonify_Trajectory)

---

## 🪄 License

This project is licensed under the **MIT License**  
© 2025 — Created with ❤️ and physics by *Lay Shah*

---

## 🌌 Quote Before Launch

> “Gravity explains the motions of the planets, but it cannot explain who sets the planets in motion.”  
> — *Isaac Newton*

---

## 💫 Try It Now!

Run instantly in your terminal:

```bash
npx newton-arc --angle 60 --speed 25
```

Let the **apple fly** 🍎✨  
And watch **Newton’s discovery** come alive — in your command line!
