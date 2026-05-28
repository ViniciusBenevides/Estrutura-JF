# Institutional Portal - IT Residency (Federal Judiciary)
![Badge Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Badge TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📸 Portal Preview
Below are previews of the main interfaces of the institutional portal.

### 1. Home & Presentation
![Home Page](./screenshots/home.png)
![About Us](./screenshots/sobre-nos.png)

### 2. Projects Grid (The Ecosystem)
![Projects](./screenshots/projetos1.png)
![Projects](./screenshots/projetos2.png)
![Projects](./screenshots/projetos3.png)

### 3. Responsiveness (Mobile)
<div style="display: flex; gap: 10px;">
  <img src="./screenshots/mobile-1.png" width="300" alt="Mobile View">
</div>

---

## 💻 About the Project
This project is the **Institutional Web Platform** developed to centralize and showcase the innovation ecosystem of the **IT Residency Program of the Federal Judiciary**.

The goal was to create a single Hub where civil servants, magistrates, and the public could access detailed information about the 6 major solutions developed in the program (AgendaFácil, LicitaFácil, GestãoFácil, FolhaFácil, FrotaFácil, and RequisiçãoFácil).

Unlike a common static website, this portal uses **Server-Side Rendering (SSR)** to ensure maximum performance, optimized SEO, and accessibility following strict government standards.

## 🚀 The Connected Ecosystem
The portal serves as the entry point for the following systems:

- **AgendaFácil:** Assistance with hearing scheduling.
- **LicitaFácil:** Automation and management of purchases and bidding processes.
- **GestãoFácil:** Contract management and oversight.
- **FolhaFácil:** Modernization of payroll processing.
- **FrotaFácil:** Control and management of the official vehicle fleet.
- **RequisiçãoFácil:** Automation of material requisitions.

## 🛠 Technologies & Architecture
The project was built with a modern stack focused on scalability and maintainability:

- **[Next.js](https://nextjs.org/)**: React framework for production, used for SSR and optimized routing.
- **[TypeScript](https://www.typescriptlang.org/)**: Static typing for greater code safety and quality.
- **[React](https://reactjs.org/)**: Library for building component-based interfaces.
- **[Docker](https://www.docker.com/)**: Application containerization to ensure consistency across environments.
- **[AWS](https://aws.amazon.com/)**: Cloud infrastructure for hosting and services.
- **[Vercel](https://vercel.com/)**: Frontend deployment and hosting platform.

## 🏆 Technical Achievements
During development, the following challenges were overcome:

* **SSR Architecture:** Implementation of server-side rendering for instant loading and better search engine indexing (SEO).
* **CI/CD Pipeline:** Configuration of an automated deployment pipeline using Docker and AWS, ensuring continuous and secure deliveries.
* **Design System:** Creation of reusable and responsive components that maintain the Judiciary's visual identity.
* **Accessibility:** Strict application of web accessibility guidelines (WCAG) for digital inclusion.

## 📦 How to Run Locally

```bash
# Clone this repository
git clone https://github.com/ViniciusBenevides/Estrutura-JF.git

# Navigate to the project folder
cd Estrutura-JF

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```
