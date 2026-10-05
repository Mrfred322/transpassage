# Transpassage — modern website, revised version 2

A complete static redesign based on the six supplied screenshots. No npm installation, build command or paid hosting is needed. Original live website is unaffected.

## 1. Open the website on Ubuntu

1. Extract `transpassage-modern.zip` in Downloads.
2. Open the extracted `transpassage-modern` folder.
3. Double-click `index.html` to open it in Firefox or Chrome.
4. Open VS Code → File → Open Folder → choose `transpassage-modern`.
5. Edit the files and refresh your browser to see changes.

Optional terminal method (if extracted in Downloads):

```bash
cd ~/Downloads/transpassage-modern
code .
```

There is a SPACE between `code` and `.`. If VS Code is not installed, use File → Open Folder in your editor.

Optional local server:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000 and press Ctrl+C in the terminal when finished.

## 2. Where to edit

| File | Purpose |
| --- | --- |
| index.html | Headline, services, journey, FAQs, contact details and form |
| style.css | Colours, layout, mobile design and effects |
| script.js | Stage finder, mobile menu, enquiry messages and privacy dialog |
| assets/logo.png | Logo cropped from your supplied screenshot |
| assets/paris.jpg | Skyline cropped from your supplied screenshot |
| assets/favicon.svg | Browser tab icon |

To change colours, edit `--ink`, `--teal` and `--paper` at the start of style.css. To update text, find the current sentence in index.html with Ctrl+F and replace it, preserving surrounding HTML tags.

When changing a service, update its select option, `data-service` value and the matching stage recommendation in script.js so enquiries stay consistent.

## 3. What works

- Responsive desktop, tablet and phone layouts.
- Accessible mobile navigation and keyboard focus indicators.
- Interactive guidance finder for exploring, applying and already-abroad stages.
- Service buttons preselect the relevant enquiry interest.
- Expandable FAQs, privacy dialog, phone, email and location links.
- Enquiry validation and message preparation for WhatsApp or email.
- Scroll reveals, hover effects, smooth anchor navigation and reduced-motion support.
- Relative asset paths suitable for a GitHub project site.

No server, CRM, account registration, database or automatic email delivery is included. WhatsApp and email open a draft; visitors must press Send in the external app. No enquiry details are stored on the website. The listed services are consultancy enquiries rather than a confirmed named enrolment program; replace the copy if the client has a specific program.

## 4. Confirm with your client before launch

- Verify +91 99622 45886 is the current WhatsApp/mobile number.
- Verify info@transpassage.com and the Anna Nagar West address.
- Confirm services, current fees, schedules, supported countries and enquiry wording.
- Request the original high-resolution logo and licensed photos. Current images are screenshot crops and are suitable for a first design review.
- Add client-approved testimonials, university partnerships and measured results only when evidence and permission are supplied.
- Confirm the privacy wording matches the client’s real handling of messages.
- Test enquiries from a phone and review the drafted message before sending.

## 5. Publish on free GitHub Pages

Use a PROJECT repository called `transpassage-modern`. This gives a separate client preview and avoids replacing your personal portfolio at your root GitHub Pages address.

1. Sign in to https://github.com.
2. Choose New repository. Name it `transpassage-modern`, select Public and create it.
3. Choose Add file → Upload files.
4. Upload the CONTENTS of the extracted folder: index.html, style.css, script.js and assets. Keep index.html at repository root, not inside an extra transpassage-modern folder.
5. Commit the upload.
6. Go to Settings → Pages.
7. Under Source choose Deploy from a branch.
8. Choose main and /(root), then Save.
9. Wait for GitHub to show the published link.

For account `Mrfred322`, the expected project URL is:
https://mrfred322.github.io/transpassage-modern/

This URL becomes available only after you upload and enable Pages. Nothing in this package has been published to your GitHub account.

Official reference:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

If the URL gives 404: verify repository visibility, Pages source, successful Actions deployment and index.html at root. Asset names are case-sensitive. The package uses relative paths so the project prefix works.

## 6. Update the published version

Edit locally → refresh your preview → upload the changed files to the same repository → commit. GitHub Pages republishes changes from the chosen branch. Keep a copy of the earlier files before large changes.

## Suggested next client improvements

Once verified details are available, add a real program page with eligibility, curriculum/support scope, fees, dates and a clear enquiry action. Add genuine student stories with permission. If automatic lead tracking is required, connect an agreed form service or backend and update the privacy disclosure; GitHub Pages alone does not process forms.

## Revised design

This version replaces the numbered hero panel with a Paris photo composition, corrects the wrong QR-code image crop, aligns service card headings and links, standardises content margins, reduces empty space and adds distinct guidance and FAQ panels. Browser-based visual verification could not run in the creation environment. Open index.html locally to review desktop and mobile appearance.

Extract this ZIP into a fresh folder, rather than mixing files with the previous download. If replacing an existing copy, replace the complete assets folder, index.html, style.css and script.js together.
