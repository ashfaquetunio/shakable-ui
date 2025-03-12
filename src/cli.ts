#!/usr/bin/env node
import { Command } from "commander"
import fs from "fs-extra"
import path from "path"
import chalk from "chalk"
import inquirer from "inquirer"
import { fileURLToPath } from "url"

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const program = new Command()

program
  .name("component-share")
  .description("CLI to share and manage components across your organization")
  .version("1.0.0")

program
  .command("add")
  .description("Add a component to your project")
  .argument("<component-name>", "Name of the component to add")
  .option("-d, --destination <path>", "Destination directory", "./components")
  .action(async (componentName, options) => {
    try {
      // Check if component exists in the package
      const componentDir = path.join(__dirname, "../components", componentName)
      if (!fs.existsSync(componentDir)) {
        console.log(chalk.red(`Component ${componentName} not found in the library.`))

        // List available components
        const availableComponents = fs.readdirSync(path.join(__dirname, "../components"))
        console.log(chalk.yellow("\nAvailable components:"))
        availableComponents.forEach((comp) => {
          console.log(chalk.green(`- ${comp}`))
        })
        return
      }

      // Check if destination exists
      const destinationDir = path.resolve(process.cwd(), options.destination)
      if (!fs.existsSync(destinationDir)) {
        const { createDir } = await inquirer.prompt([
          {
            type: "confirm",
            name: "createDir",
            message: `Destination directory ${options.destination} does not exist. Create it?`,
            default: true,
          },
        ])

        if (createDir) {
          fs.mkdirSync(destinationDir, { recursive: true })
        } else {
          console.log(chalk.yellow("Operation cancelled."))
          return
        }
      }

      // Create component-specific directory
      const componentDestDir = path.join(destinationDir, componentName)

      // Check if component already exists in destination
      if (fs.existsSync(componentDestDir)) {
        const { overwrite } = await inquirer.prompt([
          {
            type: "confirm",
            name: "overwrite",
            message: `Component ${componentName} already exists in destination. Overwrite?`,
            default: false,
          },
        ])

        if (!overwrite) {
          console.log(chalk.yellow("Operation cancelled."))
          return
        }
      }

      // Copy component files
      fs.copySync(componentDir, componentDestDir)
      console.log(
        chalk.green(
          `✅ Component ${chalk.bold(componentName)} added successfully to ${options.destination}/${componentName}`,
        ),
      )

      // Show usage instructions
      console.log("\nUsage:")
      console.log(
        chalk.cyan(
          `import { ${componentName} } from '${path.relative(process.cwd(), componentDestDir).replace(/\\/g, "/")}';`,
        ),
      )
      console.log(chalk.green("\nYou can now modify the component to fit your needs!"))
    } catch (error) {
      console.error(chalk.red("Error adding component:"), error)
    }
  })

program
  .command("list")
  .description("List all available components")
  .action(() => {
    try {
      const componentsDir = path.join(__dirname, "../components")
      const components = fs.readdirSync(componentsDir)

      console.log(chalk.yellow("\nAvailable components:"))

      components.forEach((componentName) => {
        // Read component metadata if available
        const metadataPath = path.join(componentsDir, componentName, "metadata.json")
        let description = ""

        if (fs.existsSync(metadataPath)) {
          const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"))
          description = metadata.description || ""
        }

        console.log(chalk.green(`- ${componentName}${description ? ": " + description : ""}`))
      })
    } catch (error) {
      console.error(chalk.red("Error listing components:"), error)
    }
  })

program.parse()

