// Main entry point for Autonomous Security Copilot

import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

// ASCII Art Banner
const banner = `
███████╗██╗  ██╗ ██████╗ ██╗  ██╗████████╗███████╗███╗   ██╗
██╔════╝╚██╗██╔╝██╔═══██╗██║  ██║╚══██╔══╝██╔════╝████╗  ██║
█████╗   ╚███╔╝ ██║   ██║███████║   ██║   █████╗  ██╔██╗ ██║
██╔══╝   ██╔██╗ ██║   ██║██╔══██║   ██║   ██╔══╝  ██║╚██╗██║
██║    ██╔╝ ██╗╚██████╔╝██║  ██║   ██║   ███████╗██║ ╚████║
╚═╝    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝
                                                    
██████╗ ███████╗███████╗██╗     ██╗███╗   ██╗███████╗
██╔══██╗██╔════╝██╔════╝██║     ██║████╗  ██║██╔════╝
██████╔╝█████╗  █████╗  ██║     ██║██╔██╗ ██║█████╗  
██╔══██╗██╔══╝  ██╔══╝  ██║     ██║██║╚██╗██║██╔══╝  
██║  ██║███████╗██║     ███████╗██║██║ ╚████║███████╗
╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝
`;

program
  .name('security-copilot')
  .description('AI Red Team as a Service - Autonomous Security Copilot')
  .version('1.0.0');

program.parse(process.argv);

// Show banner and help if no arguments
if (!process.argv.slice(2).length) {
  console.log(chalk.cyan(banner));
  console.log(chalk.yellow('═'.repeat(60)));
  console.log(chalk.green('  🤖 AI Red Team as a Service'));
  console.log(chalk.green('  📡 Autonomous Security Copilot v1.0.0'));
  console.log(chalk.yellow('═'.repeat(60)));
  console.log(chalk.gray('\nUsage:'));
  console.log('   npm run run -- -t <target>    Run full security assessment');
  console.log('   npm run scan -- -t <target>   Scan infrastructure only');
  console.log('   npm run attack -- -t <target> Run attack simulation');
  console.log('   npm run learn                Show learning status');
  console.log(chalk.gray('\nOptions:'));
  console.log('   -t, --target <target>       Target to scan');
  console.log('   -s, --skip-tickets          Skip ticket filing');
  console.log(chalk.gray('\nExamples:'));
  console.log('   npm run run -- -t 192.168.1.1');
  console.log('   npm run scan -- -t example.com');
  console.log('');
}
