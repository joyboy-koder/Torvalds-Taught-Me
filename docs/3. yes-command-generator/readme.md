# YES Command Generator

A simple and beginner-friendly project that demonstrates how the classic Linux **`yes`** command works and why it keeps repeating any text you give it. This tool is perfect for teaching or learning Linux basics, automation concepts, and terminal behavior.

---

## 🚀 Project Overview

The **YES Command Generator** mimics the behavior of the Linux `yes` command:

- Whatever text the user enters is repeated **continuously**  
- The repetition continues until manually stopped  
- The project visually shows how endless terminal output works  

This is great for:
- Linux beginners  
- Students  
- Visual demonstrations  
- Understanding automation in shell commands

---

## 📌 How the `yes` Command Works (Simple Explanation)

The Linux `yes` command prints a word or sentence **over and over again** without stopping.

Example:
```bash
yes hello

Output:

hello
hello
hello
...
```
```bash
If you run:

yes

it repeats:

y
y
y
...
```
❓ Why does it keep repeating?

Because yes is designed to print output forever until you manually stop it by pressing:

```bash
CTRL + C
```

📦 Using yes During Package Installation

yes is also used to automatically answer “yes” when Linux asks for confirmation during installations.

Example:
```bash
yes | sudo apt install package
```
This is useful when the system asks:

Do you want to continue? [Y/n]
The yes command sends “y” repeatedly, allowing installations to continue without manual input.

Other examples:

```bash
yes | sudo pacman -S package
yes | sudo apt install package
yes | sudo dnf install package
```

live demo > (https://joyboy-koder.github.io/Torvalds-Taught-Me/)

## Used for:

Automation scripts

CI/CD pipelines

Large batch installations

Hands-free terminal workflows

## 🛠 Technologies Used

HTML

CSS

JavaScript


## 👤 Author

Built by KevTag — a self-taught developer building creative projects to help beginners understand tech more easily.
