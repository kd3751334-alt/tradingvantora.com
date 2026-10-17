# Vantora Trading Platform — GitHub Pages prototype

This is a responsive, static website prototype. It is not connected to any real trading service, payment processor, user database, or wallet.

## Files
- `index.html` — user-facing Vantora homepage
- `admin.html` — separate admin preview page
- `style.css` — shared responsive styling
- `script.js` — local demo interactions only

## Publish with GitHub Pages
1. Open your repository `vantoratrading.com`.
2. Click **Add file → Upload files**.
3. Upload the four files above (or extract the ZIP and upload the files from inside the folder, not the folder itself).
4. Click **Commit changes**.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch `main`, folder `/(root)`, and click **Save**.
8. Wait for GitHub Pages to publish. The URL is usually `https://kd3751334-alt.github.io/vantoratrading.com/`.

Admin preview URL will be the same base URL followed by `admin.html`, for example:
`https://kd3751334-alt.github.io/vantoratrading.com/admin.html`

## Important limitations
- `admin.html` is NOT protected. Anyone who knows or discovers the URL can open it.
- Demo balances and requests are illustrative and do not persist or synchronize between pages/devices.
- Never use this static website to accept public investments, collect deposits, process withdrawals, or claim guaranteed returns.
- A real service needs a secure backend, database, authenticated user accounts, server-side admin permissions, audit logs, tested payment integrations, and legal/regulatory review before handling money.
