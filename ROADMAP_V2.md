# Project Roadmap Update: "MindSync Solutions" (v2.0)

## 1. Updated Global Directives
*   **Ad Spaces (The 2000s Scam Vibe):** All pages must include a right or left sidebar (using `<td>` tags) dedicated to fake, flashy, kitschy advertisements.
*   **Ad Content:** Use placeholder animated GIFs. Provide prompts or text for the ads like: *"You are the 1,000,000th visitor! Click here to claim your prize!"*, *"Download more RAM for your brain!"*, or *"Hot cyborgs in your area looking to sync."*

## 2. Updated File Architecture
```text
/mindsync
├── index.html       
├── scanner.html     
├── result.html      
├── pricing.html     
├── store.html       (NEW: Hardware e-commerce page)
├── style.css        
└── /assets
    ├── logo.gif
    ├── brain-map.jpg
    ├── construction.gif
    ├── ad1_flashing.gif (NEW: Fake ad asset)
    └── ad2_banner.gif   (NEW: Fake ad asset)
```

## 3. Updated Page Specifications

### B. `scanner.html` (The Core App - UPDATED)
*   *Insert this new step before the final Upload button.*
*   **Step 2.5: The Retina Scan (Hardware Integration).** 
    *   **UI:** A section titled `> Biometric Authentication Required <` with a "Start Retina Scan" button.
    *   **Action:** When clicked, use Vanilla JS (`navigator.mediaDevices.getUserMedia`) to request webcam permission and display the live video feed inside a small `<video>` element with a heavy border.
    *   **The "Fake" Detection:** Do not use complex ML libraries. Instead, when the video plays, trigger a CSS animation of a green horizontal line scanning up and down over the video feed. 
    *   **Validation:** After exactly 3.5 seconds, overlay a green blinking text `[RETINA MATCH FOUND]`. Stop the webcam stream completely (`stream.getTracks()[0].stop()`), hide the video element, and reveal the final "Upload" button to proceed to Step 3.

### E. `store.html` (NEW: The DIY Hardware Kit)
*   **Page Title (`<title>`):** `MindSync Store ::: DIY Upload Kits`
*   **Layout:** A catalog layout using a 2-column `<table>`.
*   **Item 1: "MindSync Dial-up Helmet v1.0"**
    *   *Description:* "Transfer your consciousness from the comfort of your living room! Connects directly to your 56k modem. Warning: Do not pick up the phone during transfer to avoid permanent personality corruption."
    *   *Price:* $4,999.99
*   **Item 2: "Parallel Port Cranial Needles (Pack of 8)"**
    *   *Description:* "Gold-plated needles for maximum bandwidth. Plugs directly into your printer port (LPT1)."
    *   *Price:* $199.50
*   **Interaction:** Every "Add to Cart" or "Buy Now" button on this page must trigger a standard Javascript `alert()` with a classic error message: 
    *   `Error 402: Transaction blocked by the World Bank. Your credit score is insufficient for immortality.`