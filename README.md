# Micro Frontend Module Federation

# Micro Frontend Application
This project is a micro frontend application. It uses a monorepo structure with multiple apps, managed by Lerna and built with SWC.

## Project Structure
The project is organized into multiple workspaces, each representing a separate app. These are located in the `apps/` directory.

* apps
  * app1
  * host
  * shared

## Tech

**React JS** - library for web and native user interfaces.

**Typescript** - allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

**Lerna** -  monorepo tool for JavaScript/TypeScript.

**Webpack** - Module Federation] - a method in which code can be split into smaller deployable modules that can be shared and consumed at runtime between applications.

**Micro Frontend** - a development approach where a web application's front end is divided into smaller, self-contained modules

## Installation

Clone the repository

```sh
 git clone https://github.com/riten7/MicroFrontendModuleFederation.git
```

Install the dependencies and devDependencies, please follow the steps in order :

 and start the server. You can run each project independently, follow the steps below:

#### Step 1 - Setup the host (main app)

```sh
cd apps
npm install
```

#### Step 2 - Setup and run app1 application

```sh
cd apps/app1
npm install
npm run dev  [#it will open the app1 micro frontend app in the browser at http://localhost:3001/]
```

#### Step 3 - Setup and run shared application

```sh
cd apps/shared
npm install
npm run dev - [#it will open the shared micro frontend app in the browser at http://localhost:3003/]
```

#### Step 4 - Run the main app (host)

```sh
cd apps
npm run start [#it will open main app in the browser at http://localhost:3000/]
```

> Note: `Host app will not work after step 1` <br /> <br />
  WHY ? <br /> <br />
  In a micro frontend architecture using module federation, each micro frontend is typically its own separate project with its own package.json file. This means each micro frontend has its own dependencies that need to be installed separately.
  When you run npm install in the host project, it will only install the dependencies listed in the host project's package.json file. It will not install the dependencies for the micro frontends. <br /> <br />
  Therefore, you should run npm install in each micro frontend project to ensure all their dependencies are installed. This is necessary to ensure that each micro frontend can run correctly in isolation, which is one of the key benefits of the micro frontend architecture. <br /> <br />
  However, when the host project consumes the micro frontends, it does not need to have their dependencies installed. The micro frontends will bring along their own dependencies when they are loaded by the host. This is one of the benefits of module federation - it allows each micro frontend to manage its own dependencies, reducing the risk of version conflicts. 
