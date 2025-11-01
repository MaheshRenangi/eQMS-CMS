# QMS (Quality Management System) - Document Management System

This project implements a comprehensive Quality Management System (QMS) focusing on the Document Management System (DMS) module, built with Next.js, React, TypeScript, and Prisma with SQLite database.

## Project Overview

The QMS application implements **115 specific requirements** for document management in pharmaceutical and regulated industries, including:

- Document creation with predefined templates (DMS-01 to DMS-06)
- Change control linkage (DMS-07 to DMS-11)
- Drafting, collaboration, and review preparation (DMS-12 to DMS-15)
- Review and approval workflows (DMS-16 to DMS-24)
- External review/approval capabilities (DMS-25 to DMS-33)
- Training and effectiveness management (DMS-34 to DMS-40)
- Parent-child document relationships (DMS-41 to DMS-56)
- Document holds and suspensions (DMS-57 to DMS-59)
- Revision and version control (DMS-60 to DMS-74)
- Periodic review and revalidation (DMS-75 to DMS-82)
- Search, access, and document controls (DMS-83 to DMS-92)
- Document requests and issuance (DMS-93 to DMS-107)
- Legacy document management (DMS-108 to DMS-115)

## User Accounts

The system comes with predefined user accounts for different roles:

- **Mahesh** (Author - 001): `mahesh@qms.com`
- **Srihari** (Reviewer - 002): `srihari@qms.com`  
- **Sravan** (Approver - 003): `sravan@qms.com`
- **Sai** (QA Head - 004): `sai@qms.com`
- **Jaswanth** (Admin - 005): `jaswanth@qms.com`

**Password for all accounts**: `qms123456`

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up the database:**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser and use any of the demo accounts above.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
