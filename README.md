# 📚 Book Vibe

A modern and interactive **Next.js** book application for exploring books, viewing detailed information, managing read lists and wishlists, and visualizing reading activity through charts.

---

## 🌐 Live Demo

🔗 **Live Website:** [https://nextjs-book-vibe-page-m2j3-mu.vercel.app/](https://nextjs-book-vibe-page-m2j3-mu.vercel.app/)

🔗 **GitHub Repository:** [https://github.com/Sadekul21/nextjs-book-vibe-page](https://github.com/Sadekul21/nextjs-book-vibe-page)

---

## 📸 Project Preview

<img width="815" height="438" alt="Image" src="https://github.com/user-attachments/assets/ce5fab6f-e66c-4c26-8f07-cee7cf8bea15" />

---

## 📖 About the Project

**Book Vibe** is a modern book browsing and management application built with **Next.js, React, TypeScript, Tailwind CSS, and DaisyUI**.

Users can explore different books, open individual book details, add books to a **Read List** or **Wishlist**, view saved books on the Listed Books page, and visualize read-book data using **Recharts**.

I built this project to practice and improve my understanding of **Next.js App Router, dynamic routing, Context API, reusable components, TypeScript, data fetching, state management, charts, and Vercel deployment**.

---

## ✨ Features

- 📚 **Browse Books** — Explore all available books from local JSON data.
- 🔍 **Book Details** — View detailed information about each individual book.
- 📖 **Read List** — Add books to your personal read list.
- ❤️ **Wishlist** — Save books to your wishlist.
- 📑 **Listed Books** — View Read List and Wishlist books in separate tabs.
- 📊 **Reading Chart** — Visualize read-book data using Recharts.
- 🔀 **Dynamic Routing** — Each book has its own dynamic details route.
- 🌐 **Context API** — Manage shared Read List and Wishlist data across components.
- 🔔 **Toast Notifications** — Provide instant feedback for user actions.
- ⚡ **Dynamic Data** — Book information is loaded from a JSON data source.
- 📱 **Responsive Design** — Designed to work across desktop, tablet, and mobile devices.
- 🎨 **Modern UI** — Styled with Tailwind CSS and DaisyUI.
- 🚀 **Vercel Deployment** — Deployed online using Vercel.

---

## 🛠️ Tech Stack

| **Technology** | **Purpose** |
| --- | --- |
| ▲ Next.js | Main framework and routing |
| ⚛️ React | Building reusable UI components |
| 🔷 TypeScript | Type-safe development |
| 🎨 Tailwind CSS | Styling and responsive design |
| 🌼 DaisyUI | Reusable UI components |
| 📊 Recharts | Charts and data visualization |
| 🔔 React Toastify | Toast notifications |
| 📄 JSON | Storing book data |
| 🌐 Context API | Shared application state |
| 🚀 Vercel | Deployment |
| 🐙 GitHub | Version control and source code |

---

## 📦 Dependencies

The main packages used in this project are:

- `next`
- `react`
- `react-dom`
- `react-toastify`
- `recharts`
- `tailwindcss`
- `daisyui`
- `typescript`

Other development dependencies and project configuration are available in the `package.json` file.

---

## 🚀 Getting Started

Follow the steps below to run **Book Vibe** on your local machine.

### Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### 📥 Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Sadekul21/nextjs-book-vibe-page.git
```

#### 2. Navigate to the Project Directory

```bash
cd nextjs-book-vibe-page
```

#### 3. Install Dependencies

```bash
npm install
```

#### 4. Create Environment Variables

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:3000
```

#### 5. Start the Development Server

```bash
npm run dev
```

#### 6. Open the Project in Your Browser

Open:

```text
http://localhost:3000
```

---

## 📚 Main Pages

### 🏠 Home Page

The Home page contains the main banner and book-related content for the application.

### 📖 Books Page

Displays all available books loaded from the project data.

### 🔍 Book Details Page

Each book has its own dynamic details page where users can view information such as:

- Book name
- Author
- Category
- Rating
- Review
- Publisher
- Year of publishing
- Total pages
- Tags

Users can also add books to the **Read List** or **Wishlist**.

### 📑 Listed Books Page

The Listed Books page displays:

- Read List books
- Wishlist books

The books are organized using tabs for easier navigation.

### 📊 Read Books Page

The Read Books page displays read-book information using **Recharts**.

---

## 🔀 Dynamic Routing

This project uses dynamic routing in Next.js to display individual book details.

Example routes:

```text
/books/1
/books/2
/books/3
```

The route changes based on the selected book ID and displays the correct book information dynamically.

---

## 🌐 Context API

The React Context API is used to manage shared application data across different components.

It is mainly used for managing:

- Read Books
- Wishlist Books

This reduces the need to pass props through multiple component levels.

---

## 📊 Data Visualization

The project uses **Recharts** to display read-book information visually.

The chart is generated dynamically based on the books added to the user's Read List.

---

## 🔔 Toast Notifications

**React Toastify** is used to provide instant feedback when users interact with the application.

Examples include:

- Adding a book to the Read List
- Adding a book to the Wishlist
- Preventing duplicate actions

---

## ☁️ Deployment

The application is deployed using **Vercel**.

For production deployment, the following environment variable is configured in Vercel:

```env
NEXT_PUBLIC_SERVER_BASE_URL=https://nextjs-book-vibe-page-m2j3-mu.vercel.app
```

The GitHub repository is connected with Vercel, allowing new commits pushed to the repository to trigger new deployments automatically.

---

## 🎯 What I Practiced

While building this project, I practiced and improved my understanding of:

- Next.js App Router
- React components
- Server Components
- Client Components
- TypeScript
- TypeScript interfaces
- Dynamic routing
- Context API
- `useContext()`
- State management
- Conditional rendering
- Rendering lists using `.map()`
- Array filtering
- Array sorting
- Data fetching
- Local JSON data
- Reusable components
- Next.js `Link`
- Next.js `Image`
- Read List functionality
- Wishlist functionality
- Tab-based UI
- Recharts
- React Toastify
- Responsive design
- Tailwind CSS
- DaisyUI
- Environment variables
- Production builds
- Git and GitHub workflow
- Vercel deployment

---

## 🤝 Feedback

This project is part of my learning journey in **full-stack web development**.

I'm always open to constructive feedback and suggestions that can help improve the project and strengthen my development skills.

---

## 👨‍💻 Author

**Md Sadekul Islam**

Computer Science Student | Full-Stack Web Development Learner

Currently focused on building practical projects and developing my skills in **JavaScript, TypeScript, React, Next.js, and Node.js**.

---

⭐ If you found this project interesting, feel free to explore the repository and visit the live website.
