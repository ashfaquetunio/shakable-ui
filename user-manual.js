"use client"
\
#!/usr/bin/env node

/**
 * Component Share - Interactive User Manual
 *
 * This script provides interactive documentation for the Component Share package.
 * Run it with: node user-manual.js
 */

import chalk from "chalk"
import inquirer from "inquirer"
import path from "path"
import { fileURLToPath } from "url"

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ASCII art logo
const logo = `
 _____                                             _      _____ _                    
/  __ \\                                           | |    /  ___| |                   
| /  \\/ ___  _ __ ___  _ __   ___  _ __   ___ _ __ | |_   \\ \`--.| |__   __ _ _ __ ___ 
| |    / _ \\| '_ \` _ \\| '_ \\ / _ \\| '_ \\ / _ \\ '_ \\| __|   \`--. \\ '_ \\ / _\` | '__/ _ \\
| \\__/\\ (_) | | | | | | |_) | (_) | | | |  __/ | | | |_   /\\__/ / | | | (_| | | |  __/
 \\____/\\___/|_| |_| |_| .__/ \\___/|_| |_|\\___|_| |_|\\__|  \\____/|_| |_|\\__,_|_|  \\___|
                      | |                                                             
                      |_|                                                             
`

// Main menu options
const MAIN_MENU = {
  INTRODUCTION: "Introduction to Component Share",
  INSTALLATION: "Installation Guide",
  CLI_USAGE: "CLI Usage Guide",
  COMPONENTS: "Component Documentation",
  EXAMPLES: "Usage Examples",
  TROUBLESHOOTING: "Troubleshooting",
  EXIT: "Exit",
}

// Component options
const COMPONENTS = {
  BUTTON: "Button",
  CARD: "Card",
  FORM: "Form",
  MODAL: "Modal",
  BACK: "Back to Main Menu",
}

// Display the welcome message
function displayWelcome() {
  console.clear()
  console.log(chalk.cyan(logo))
  console.log(chalk.bold.white("\nWelcome to the Component Share Interactive User Manual\n"))
  console.log(chalk.white("This guide will help you understand how to use the Component Share package"))
  console.log(chalk.white("to manage and share React components across your organization.\n"))
}

// Display introduction
function displayIntroduction() {
  console.clear()
  console.log(chalk.bold.cyan("\n=== Introduction to Component Share ===\n"))
  console.log(chalk.white("Component Share is a CLI tool that allows you to:"))
  console.log(chalk.white("- Add pre-built React components to your project"))
  console.log(chalk.white("- Customize these components to fit your needs"))
  console.log(chalk.white("- Share components across your organization"))
  console.log(chalk.white("\nThe package includes several ready-to-use components:"))
  console.log(chalk.white("- Button: A customizable button with various styles and states"))
  console.log(chalk.white("- Card: A container for grouping related content"))
  console.log(chalk.white("- Form: A flexible form component with validation support"))
  console.log(chalk.white("- Modal: A dialog component for critical actions"))
  console.log(chalk.white("\nAll components are written in TypeScript and use CSS for styling."))
}

// Display installation guide
function displayInstallation() {
  console.clear()
  console.log(chalk.bold.cyan("\n=== Installation Guide ===\n"))
  console.log(chalk.white("To install Component Share globally:"))
  console.log(chalk.cyan("\nnpm install -g component-share\n"))
  console.log(chalk.white("Or, if you prefer to use it without installing:"))
  console.log(chalk.cyan("\nnpx component-share <command>\n"))
  console.log(chalk.white("Requirements:"))
  console.log(chalk.white("- Node.js v16 or higher"))
  console.log(chalk.white("- npm v7 or higher"))
  console.log(chalk.white("\nTo verify the installation:"))
  console.log(chalk.cyan("\ncomponent-share --version\n"))
}

// Display CLI usage guide
function displayCliUsage() {
  console.clear()
  console.log(chalk.bold.cyan("\n=== CLI Usage Guide ===\n"))

  console.log(chalk.bold.white("Adding a component:"))
  console.log(chalk.white("To add a component to your project:"))
  console.log(chalk.cyan("\ncomponent-share add <component-name>\n"))
  console.log(chalk.white("Example:"))
  console.log(chalk.cyan("\ncomponent-share add Button\n"))
  console.log(chalk.white("This will add the Button component to the ./components directory in your project."))

  console.log(chalk.white("\nYou can specify a custom destination:"))
  console.log(chalk.cyan("\ncomponent-share add Button --destination src/ui\n"))

  console.log(chalk.bold.white("\nListing available components:"))
  console.log(chalk.white("To see all available components:"))
  console.log(chalk.cyan("\ncomponent-share list\n"))

  console.log(chalk.bold.white("\nHelp:"))
  console.log(chalk.white("To see all available commands:"))
  console.log(chalk.cyan("\ncomponent-share --help\n"))
  console.log(chalk.white("For help with a specific command:"))
  console.log(chalk.cyan("\ncomponent-share add --help\n"))
}

// Display component documentation
function displayComponentDocs(component) {
  console.clear()

  switch (component) {
    case COMPONENTS.BUTTON:
      console.log(chalk.bold.cyan("\n=== Button Component ===\n"))
      console.log(chalk.white("A customizable button component with various variants and states."))

      console.log(chalk.bold.white("\nProps:"))
      console.log(chalk.white("- variant: The style of the button ('primary', 'secondary', 'outline', or 'ghost')"))
      console.log(chalk.white("- size: The size of the button ('sm', 'md', or 'lg')"))
      console.log(chalk.white("- isLoading: Whether the button is in a loading state"))
      console.log(chalk.white("- onClick: Function called when the button is clicked"))
      console.log(chalk.white("- disabled: Whether the button is disabled"))
      console.log(chalk.white("- className: Additional CSS classes to apply to the button"))

      console.log(chalk.bold.white("\nExample:"))
      console.log(
        chalk.cyan(`
import { Button } from './components/Button';

function App() {
  return (
    <Button 
      variant="primary" 
      size="md" 
      onClick={() => alert('Clicked!')}
    >
      Click me
    </Button>
  );
}
      `),
      )
      break

    case COMPONENTS.CARD:
      console.log(chalk.bold.cyan("\n=== Card Component ===\n"))
      console.log(chalk.white("A container component for grouping related content and actions."))

      console.log(chalk.bold.white("\nProps:"))
      console.log(chalk.white("- header: Optional content to render in the card header"))
      console.log(chalk.white("- footer: Optional content to render in the card footer"))
      console.log(chalk.white("- hoverable: Whether the card should have a hover effect"))
      console.log(chalk.white("- bordered: Whether the card should have a border"))
      console.log(chalk.white("- className: Additional CSS classes to apply to the card"))

      console.log(chalk.bold.white("\nExample:"))
      console.log(
        chalk.cyan(`
import { Card } from './components/Card';
import { Button } from './components/Button';

function App() {
  return (
    <Card 
      header={<h3>Card Title</h3>} 
      footer={<Button>Action</Button>} 
      hoverable
    >
      <p>This is the card content</p>
    </Card>
  );
}
      `),
      )
      break

    case COMPONENTS.FORM:
      console.log(chalk.bold.cyan("\n=== Form Component ===\n"))
      console.log(chalk.white("A flexible form component with support for validation and different layouts."))

      console.log(chalk.bold.white("\nProps:"))
      console.log(chalk.white("- onSubmit: Function called when the form is submitted"))
      console.log(chalk.white("- layout: Form layout ('vertical', 'horizontal', or 'inline')"))
      console.log(chalk.white("- className: Additional CSS classes to apply to the form"))

      console.log(chalk.bold.white("\nForm.Item Props:"))
      console.log(chalk.white("- label: Label for the form field"))
      console.log(chalk.white("- help: Optional help text to display below the field"))
      console.log(chalk.white("- error: Optional error message"))
      console.log(chalk.white("- required: Whether this field is required"))

      console.log(chalk.bold.white("\nExample:"))
      console.log(
        chalk.cyan(`
import { Form } from './components/Form';
import { Button } from './components/Button';

function App() {
  const handleSubmit = (event) => {
    // Handle form submission
  };

  return (
    <Form onSubmit={handleSubmit} layout="vertical">
      <Form.Item label="Username" required error={errors.username}>
        <input type="text" name="username" />
      </Form.Item>
      <Form.Item label="Password" required>
        <input type="password" name="password" />
      </Form.Item>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
      `),
      )
      break

    case COMPONENTS.MODAL:
      console.log(chalk.bold.cyan("\n=== Modal Component ===\n"))
      console.log(
        chalk.white(
          "A dialog component that appears in front of the main content to provide critical information or request user input.",
        ),
      )

      console.log(chalk.bold.white("\nProps:"))
      console.log(chalk.white("- isOpen: Whether the modal is visible"))
      console.log(chalk.white("- onClose: Function to close the modal"))
      console.log(chalk.white("- title: Optional modal title"))
      console.log(chalk.white("- footer: Optional modal footer content, typically contains action buttons"))
      console.log(chalk.white("- width: Width of the modal (default: '500px')"))
      console.log(chalk.white("- closeOnOverlayClick: Whether to close the modal when the overlay is clicked"))

      console.log(chalk.bold.white("\nExample:"))
      console.log(
        chalk.cyan(`
import { useState } from 'react';
import { Modal } from './components/Modal';
import { Button } from './components/Button';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Confirm Action" 
        footer={
          <>
            <Button onClick={() => setIsOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button>Confirm</Button>
          </>
        }
      >
        <p>Are you sure you want to perform this action?</p>
      </Modal>
    </>
  );
}
      `),
      )
      break
  }
}

// Display usage examples
function displayExamples() {
  console.clear()
  console.log(chalk.bold.cyan("\n=== Usage Examples ===\n"))

  console.log(chalk.bold.white("Example 1: Creating a Login Form"))
  console.log(
    chalk.cyan(`
import { Form } from './components/Form';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { useState } from 'react';

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  
  return (
    <Card header={<h2>Login</h2>}>
      <Form onSubmit={handleSubmit} layout="vertical">
        <Form.Item label="Email" required error={errors.email}>
          <input type="email" name="email" />
        </Form.Item>
        <Form.Item label="Password" required error={errors.password}>
          <input type="password" name="password" />
        </Form.Item>
        <Button type="submit" isLoading={loading}>
          Login
        </Button>
      </Form>
    </Card>
  );
}
  `),
  )

  console.log(chalk.bold.white("\nExample 2: Confirmation Dialog"))
  console.log(
    chalk.cyan(`
import { useState } from 'react';
import { Modal } from './components/Modal';
import { Button } from './components/Button';

function DeleteConfirmation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleDelete = () => {
    // Perform delete operation
    setIsOpen(false);
  };
  
  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Delete Item
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Confirm Deletion" 
        footer={
          <>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Delete
            </Button>
          </>
        }
      >
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      </Modal>
    </>
  );
}
  `),
  )
}

// Display troubleshooting tips
function displayTroubleshooting() {
  console.clear()
  console.log(chalk.bold.cyan("\n=== Troubleshooting ===\n"))

  console.log(chalk.bold.white("Issue: Component not found"))
  console.log(chalk.white("If you get an error saying a component is not found:"))
  console.log(chalk.white("1. Make sure you've installed the package correctly"))
  console.log(chalk.white("2. Run `component-share list` to see available components"))
  console.log(chalk.white("3. Check the component name for typos"))

  console.log(chalk.bold.white("\nIssue: Permission denied when running CLI"))
  console.log(chalk.white("If you get a permission error when running the CLI:"))
  console.log(chalk.white("1. Try running with sudo (on Linux/Mac): `sudo component-share <command>`"))
  console.log(chalk.white("2. Or run with npx: `npx component-share <command>`"))

  console.log(chalk.bold.white("\nIssue: Styling issues"))
  console.log(chalk.white("If components don't look right:"))
  console.log(chalk.white("1. Make sure the CSS file is being imported correctly"))
  console.log(chalk.white("2. Check if your build system is configured to handle CSS imports"))
  console.log(chalk.white("3. Try adding the styles manually from the component's styles.css file"))

  console.log(chalk.bold.white("\nIssue: TypeScript errors"))
  console.log(chalk.white("If you get TypeScript errors:"))
  console.log(chalk.white("1. Make sure you have TypeScript installed"))
  console.log(chalk.white("2. Check your tsconfig.json for compatibility issues"))
  console.log(chalk.white("3. Make sure you're using the correct import syntax"))

  console.log(chalk.bold.white("\nGetting Help"))
  console.log(chalk.white("If you need further assistance:"))
  console.log(chalk.white("1. Check the documentation in the README.md file"))
  console.log(chalk.white("2. Open an issue on the GitHub repository"))
  console.log(chalk.white("3. Contact the package maintainers"))
}

// Main menu
async function mainMenu() {
  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to learn about?",
      choices: Object.values(MAIN_MENU),
    },
  ])

  switch (choice) {
    case MAIN_MENU.INTRODUCTION:
      displayIntroduction()
      break
    case MAIN_MENU.INSTALLATION:
      displayInstallation()
      break
    case MAIN_MENU.CLI_USAGE:
      displayCliUsage()
      break
    case MAIN_MENU.COMPONENTS:
      await componentsMenu()
      return // Skip the "Press any key" prompt
    case MAIN_MENU.EXAMPLES:
      displayExamples()
      break
    case MAIN_MENU.TROUBLESHOOTING:
      displayTroubleshooting()
      break
    case MAIN_MENU.EXIT:
      console.log(chalk.green("\nThank you for using Component Share!\n"))
      process.exit(0)
  }

  // Wait for user to press a key
  await inquirer.prompt([
    {
      type: "input",
      name: "continue",
      message: "Press Enter to return to the main menu...",
    },
  ])
}

// Components menu
async function componentsMenu() {
  console.clear()
  console.log(chalk.bold.cyan("\n=== Component Documentation ===\n"))

  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Select a component to view its documentation:",
      choices: Object.values(COMPONENTS),
    },
  ])

  if (choice === COMPONENTS.BACK) {
    return
  }

  displayComponentDocs(choice)

  // Wait for user to press a key
  await inquirer.prompt([
    {
      type: "input",
      name: "continue",
      message: "Press Enter to return to the components menu...",
    },
  ])

  await componentsMenu()
}

// Main function
async function main() {
  displayWelcome()

  while (true) {
    await mainMenu()
  }
}

// Start the application
main().catch((error) => {
  console.error(chalk.red("An error occurred:"), error)
  process.exit(1)
})

