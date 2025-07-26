<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Armoureds Next Project Instructions

This is a Next.js project with the following setup:
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Static Export** configuration for deployment
- **ESLint** for code quality

## Key Configuration Notes:
- Static export is enabled in `next.config.js` with `output: 'export'`
- Images are unoptimized for static export compatibility
- Tailwind CSS is configured to scan all components in `src/` directory
- Uses App Router structure under `src/app/`

## Development Guidelines:
- Follow Next.js App Router conventions
- Use TypeScript interfaces for props and data structures
- Apply Tailwind classes for styling
- Ensure components are compatible with static export (no server-side features)
- Use relative imports with the `@/*` alias pointing to `src/*`
