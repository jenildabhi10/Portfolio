# 🚀 Portfolio Setup Guide — Jenil Dabhi

## Step 1: Copy files into your project

```
src/
  app/
    globals.css        ← Replace existing
    layout.tsx         ← Replace existing
    page.tsx           ← Replace existing
    api/contact/
      route.ts         ← New file
  components/          ← New folder
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Experience.tsx
    Contact.tsx
    Footer.tsx
```

## Step 2: Set up contact form email

```bash
cp .env.local.example .env.local
# Edit .env.local — add your Gmail App Password
```

**How to get Gmail App Password:**
1. Go to myaccount.google.com
2. Security → 2-Step Verification (must be ON)
3. App Passwords → Select app: Mail → Generate
4. Copy the 16-character password into EMAIL_PASS

## Step 3: Run

```bash
npm run dev
# Open http://localhost:3000
```

## Step 4: Deploy FREE on Vercel

```bash
npx vercel
```
Add ENV variables in Vercel Dashboard → Settings → Environment Variables:
- `EMAIL_USER` = jenildabhi10@gmail.com
- `EMAIL_PASS` = your app password

Your site will be live at something like `jenil-dabhi.vercel.app` 🎉

---

## What's inside

| Section | What it shows |
|---------|--------------|
| Hero | Name, typewriter roles, CSUSB mention, CTAs |
| About | Bio, MS degree, location, code card |
| Skills | 6 skill categories + 3 certifications + tech badges |
| Projects | All 5 projects with real metrics from your resume |
| Experience | LAMINDS internship + CSUSB + GIT education + club |
| Contact | Working email form (Nodemailer) |
