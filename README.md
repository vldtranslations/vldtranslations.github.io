# VLD Translations Web

Welcome to the **VLD Translations** website project repository! This React/Vite single-page application is designed to advertise and solicit work for highly skilled legal and corporate English-to-French translation services.

## Overview and Key Features

Throughout the development process, the following key capabilities and structural features were built and enabled:

1. **Modern React & Vite Architecture**
   - Established a fast, responsive, multi-page application leveraging **React 19** and **Vite**.
   - Built out a clean client-side routing structure with dedicated, accessible pages (`Home`, `Services`, `Qualifications`, `Contact`) that showcase the business's legal background, translation certifications, and core value propositions.

2. **Functional Contact Form & Email Integration**
   - Integrated the **Web3Forms API** to bring the static contact page to life.
   - Enabled secure, reliable delivery of client inquiries and document translation requests directly to the business inbox without requiring a complex, self-hosted backend.

3. **Comprehensive Search Engine Optimization (SEO)**
   - Deployed targeted static meta properties inside `index.html` (including robust Open Graph and Twitter Card tags to ensure the site looks stunning in social media and messaging previews).
   - Leveraged React 19’s native document head capabilities to dynamically inject specific `<title>` and `<meta name="description">` tags into every sub-page.
   - Optimized site-wide keywords uniquely targeted toward high-value, niche clientele (e.g., *"French lawyer-linguist"*, *"certified legal translator"*, and *"corporate English-to-French translation"*).

4. **Continuous Deployment (CI/CD)**
   - Initialized an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`) that guarantees seamless, rapid production deployments whenever code is pushed to the main branch.

## Getting Started

To run this project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
