#!/usr/bin/env node
import chalk from "chalk";
import { Command } from "commander";
import cliCursor from "cli-cursor";

// CLI setup
const program = new Command();
program
  .name("newton-apple")
  .description("🍎 Newton’s Apple Trajectory Simulator with Line Trail")
  .option("--speed <number>", "initial speed (m/s)", "30")
  .option("--angle <number>", "launch angle (degrees)", "45")
  .option("--gravity <number>", "gravity (m/s^2)", "9.8")
  .parse(process.argv);

const options = program.opts();
const speed = parseFloat(options.speed);
const angle = (parseFloat(options.angle) * Math.PI) / 180;
const gravity = parseFloat(options.gravity);

console.clear();
console.log(chalk.greenBright.bold("🍏 Newton’s Apple Trajectory Simulator 🍏"));
console.log(
  chalk.yellow(`Speed: ${speed} m/s | Angle: ${options.angle}° | Gravity: ${gravity} m/s²`)
);
console.log(chalk.gray("\nTrajectory:\n"));

// physics setup
const timeStep = 0.1;
const totalTime = (2 * speed * Math.sin(angle)) / gravity;
const points = [];

for (let t = 0; t <= totalTime; t += timeStep) {
  const x = speed * Math.cos(angle) * t;
  const y = speed * Math.sin(angle) * t - 0.5 * gravity * t * t;
  if (y >= 0) points.push({ x, y });
}

const scaleX = 2;
const scaleY = 1;
const maxY = Math.max(...points.map((p) => p.y));
const maxX = Math.max(...points.map((p) => p.x));

cliCursor.hide();
let trail = [];

// Animation loop
for (let i = 0; i < points.length; i++) {
  const frame = [];

  for (let row = Math.floor(maxY) + 2; row >= 0; row--) {
    let line = "";
    for (let col = 0; col <= Math.floor(maxX / scaleX) + 2; col++) {
      const isApple =
        Math.floor(points[i].x / scaleX) === col &&
        Math.floor(points[i].y / scaleY) === row;

      const isTrail = trail.some(
        (p) => Math.floor(p.x / scaleX) === col && Math.floor(p.y / scaleY) === row
      );

      if (isApple) line += chalk.redBright("🍎");
      else if (isTrail) line += chalk.yellowBright("━");
      else line += " ";
    }
    frame.push(line);
  }

  console.clear();
  console.log(chalk.greenBright.bold("🍏 Newton’s Apple Trajectory Simulator 🍏"));
  console.log(
    chalk.yellow(`Speed: ${speed} m/s | Angle: ${options.angle}° | Gravity: ${gravity} m/s²`)
  );
  console.log(chalk.gray("\nTrajectory:\n"));
  console.log(frame.join("\n"));

  trail.push(points[i]); // record trail
  await new Promise((r) => setTimeout(r, 60)); // animation speed
}

cliCursor.show();
console.log(chalk.greenBright("\n🍏 The apple has landed!"));
