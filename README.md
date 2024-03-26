# balcony-demo

This application demos part of the functionality of this [official balcony demo](https://demo.balcony.technology/municipality/paramus-nj)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (version 18 or above)
- [npm](https://docs.npmjs.com/) (version 10 or above)
- [Git](https://git-scm.com/) (version 2 or above)

### Checking Node.js and npm Versions

Run the following commands in your terminal to check your Node.js and npm versions:

```bash
node -v
npm -v
git --version
```

### Installing or Updating Node.js and npm

If you don't have Node.js or npm installed, or if you need to update them, consider using Node Version Manager (NVM). This tool allows you to easily install and manage multiple versions of Node.js and npm.

### Installing NVM:

**On Linux and macOS:**

Run the following curl command in your terminal:

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`

Or wget:
`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`

**On Windows:**

For Windows, there's a separate version called [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).

Download and run the installer from the GitHub releases page.

### Using NVM to Install Node.js and npm:

After installing NVM, restart your terminal and then install Node.js using your terminal (this will also install npm):

`nvm install node`

then run

`nvm use node`

### To install and use a specific version of Node.js and npm

`nvm install 18`
`nvm use 18`

### Updating npm:

If you need to update npm to a specific version, you can do so using npm itself:

`npm install -g npm@10.5.0`

### Checking for Git

Before proceeding with cloning the project, ensure you have Git installed. To check if you have Git installed, open your terminal (for macOS and Linux) or command prompt/PowerShell (for Windows) and type:

`git --version`
This command will show you the installed Git version if Git is installed, like git version 2.30.1.

### Installing Git

If Git is not installed, follow these steps to install it:

#### On macOS

Using Homebrew:
If you have Homebrew installed, run:

`brew install git`

If you do not have Homebrew installed, you have a couple of options to install Git:

##### Option 1: Install Git Directly

- Download and install the latest version of Git from the [Git website](https://git-scm.com/download/mac).

##### Option 2: Install Homebrew First

Homebrew is a package manager for macOS that makes installing and managing applications much easier. To install Homebrew and then use it to install Git, follow these steps:

1. Open the Terminal app.
2. Paste the following command and press Enter:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. Follow the on-screen instructions to complete the installation of Homebrew.
4. Once Homebrew is installed, you can install Git by running:

   ```bash
   brew install git
   ```

##### Verifying Git Installation

After installing Git using either of the above methods, you can verify the installation by running:

`git --version`

### On Windows

Download and install the latest version from the Git website.
During installation, accepting the default settings is generally safe for most users.

### On Linux

For Debian/Ubuntu-based distributions, run:

```bash
sudo apt-get update
sudo apt-get install git
```

For Fedora, run:

```bash
sudo dnf install git
```

For other distributions, replace the package management command accordingly, or refer to the Git website for more installation options.

After installing, you can verify the installation by running git --version again.

## Installing balcony-demo

To install balcony-demo, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lptalty/balcony-demo.git
   cd balcony-demo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Using balcony-demo

finally, to use the balcony-demo enter this into your terminal:

```bash
npm start
```

This command starts the server, and you can access the application by navigating to `http://localhost:8080/` in your browser
