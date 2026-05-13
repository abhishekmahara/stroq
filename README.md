# Stroq Frontend

Stroq is a React + Vite frontend focused on workout generation and fitness guidance.

## Project Structure

```text
src/
  App.jsx
  main.jsx

  components/
    common/
      ScrollToTop.jsx
      SectionWrapper.jsx
      SectionStepHeader.jsx
      SocialLink.jsx
    layout/
      Navbar.jsx
      Footer.jsx
    splash/
      Splash.jsx
    ui/
      Button.jsx

  features/
    workout/
      components/
        Generator.jsx
        Workout.jsx
        ExerciseCard.jsx
        ExerciseDescription.jsx
      data/
        swoldier.js
      utils/
        generateWorkout.js

  pages/
    Hero.jsx
    Activities.jsx
    Contact.jsx
    Nutrition.jsx
    StroqWordCloud.jsx
```

## FatSecret Integration (Nutrition Page)

The Nutrition page now includes live food search and macro lookup powered by FatSecret.

1. Create a `.env` file in `stroq-frontend/`.
2. Add these values:

```env
FATSECRET_CLIENT_ID=your_client_id
FATSECRET_CLIENT_SECRET=your_client_secret
FATSECRET_SCOPE=basic
```

3. Run `npm run dev`.

Notes:
- FatSecret OAuth token calls are proxied through Vite middleware (`vite.config.js`) so secrets stay server-side during local development.
- If credentials are missing or invalid, Nutrition food search will show a clear error message.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm run preview` - preview production build
