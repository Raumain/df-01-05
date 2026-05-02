# Guestbook Comments: Y2K Vibes Design Spec

**Date:** May 2, 2026  
**Objective:** Add 20 funny, original comments to the guestbook in a separate data structure, maintaining the 2000s website aesthetic with a mix of absurdist humor, dark comedy, and nostalgic references.

---

## Current State

The guestbook currently displays 4 hardcoded mock testimonials directly in the HTML table:
- `xX_CyberDude_Xx` (2001-03-15)
- `CEOBillionaire_78` (2000-11-02)
- `-=Lara_C.=-` (2002-01-20)
- `Admin` (1999-12-31)

Each testimonial is hardcoded in a table row structure with username, date, and comment text.

---

## Design: Data-Driven Comments

### 1. Data Structure

**Create `comments.js`** with an array of 20 comment objects:

```javascript
const guestbookComments = [
  {
    name: "username",
    date: "YYYY-MM-DD",
    comment: "The actual testimonial text"
  },
  // ... 20 total
];
```

**Date distribution:** Spread across 1999-2002 to maintain authenticity.

**Username styles:**
- leet-speak: `xX_`, `_Xx`, `133t`, numbers mixed in
- Underscores and dashes: `-=`, `_`, `--`
- Millennial vibes: references to tech, pop culture, cryptic handles

### 2. Comment Themes & Tone

The 20 comments will include a mix of:

**Absurdist Positive (~7 comments):**
- Praising consciousness transfer while describing losing core human functions
- Tech-bro buzzwords: "synergy," "paradigm shift," "cloud-based consciousness"
- Nonsensical benefits: "My thoughts now load 0.2% faster," "I can feel my RAM"

**Dark Humor (~6 comments):**
- Lost memories, identity, free will
- Dystopian undertones wrapped in positive spin: "Sure I can't see colors anymore, but think of the storage savings!"
- Body horror disguised as testimonial

**Nostalgic Y2K References (~4 comments):**
- Dial-up sounds, AOL, Kazaa, Napster, Limewire references
- Y2K bug jokes, "The future is now!" energy from early 2000s optimism
- References to outdated tech as features

**Tech-Bro/CEO Satire (~2 comments):**
- Corporate-speak about "disruption" and "leveraging consciousness"
- Genuine-sounding but absurd business outcomes
- Venture capitalist energy

**Complete Chaos (~1 comment):**
- Glitched username, nonsensical text, cryptic message
- Feels like it broke the form submission

### 3. HTML Integration

**Modify `guestbook.html`:**
- Remove the 4 hardcoded table rows (lines 61-104)
- Add a script reference to `comments.js`
- Add a render function that generates table rows from the data array
- Call the render function on page load

**Render function pseudocode:**
```javascript
function renderGuestbookComments() {
  const tbody = document.querySelector('.content-table tbody');
  guestbookComments.forEach(comment => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="width: 150px; vertical-align: top;">
        <strong>${comment.name}</strong><br>
        <span style="font-size: 12px;">Date: ${comment.date}</span>
      </td>
      <td>
        <p>"${comment.comment}"</p>
      </td>
    `;
    tbody.appendChild(row);
  });
}
```

### 4. Internationalization

Comments will use `data-i18n` attributes where appropriate to maintain consistency with existing i18n pattern (though most will remain as regular text given their absurdist nature).

---

## Success Criteria

1. ✅ All 20 comments loaded from separate `comments.js` file
2. ✅ Comments display in guestbook table without hardcoding HTML
3. ✅ Mix of humor types (absurdist, dark, nostalgic, satirical, chaotic)
4. ✅ Username handles feel authentically 2000s
5. ✅ Dates span 1999-2002 range
6. ✅ Page styling and structure unchanged
7. ✅ No broken functionality on other pages

---

## Implementation Notes

- Keep the original 4 comments as a reference (can move to `comments.js` or replace entirely)
- Consider randomizing comment order on each page load for extra chaos (optional enhancement)
- All comments should feel like they could be from an actual early-2000s forum/guestbook
- Maintain the i18n structure for consistency, but most comments won't need translation given their inherent English y2k nature
