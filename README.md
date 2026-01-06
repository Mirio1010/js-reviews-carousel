# Reviews Carousel App

This is a vanilla JavaScript mini project I built to practice DOM manipulation, event handling, and working with data stored in arrays of objects.

The app displays a review card with a person’s image, name, job title, and review text. Users can navigate through the reviews using **Previous**, **Next**, or **Surprise Me** buttons.

### Live Demo
👉 [Open the Counter App](https://mirio1010.github.io/js-reviews-carousel/)
---

## What This mini Project Does
- Displays one review at a time from an array of review objects
- Allows cycling forward and backward through the array
- Wraps around the array (no out-of-bounds errors)
- Shows a random review when clicking **Surprise Me**
- Updates the DOM dynamically based on the current index

---

## How It Works (Important for Future Me)

### Data
- Reviews are stored as an array of objects
- Each object contains: `name`, `job`, `img`, and `text`
- The UI is driven entirely by the current `index`

### State
- The `index` variable represents the currently displayed review
- Button clicks update the index
- After updating the index, the UI is re-rendered

### Rendering Logic
- All DOM updates are handled by a single function:
  ```js
  showReview(index)
