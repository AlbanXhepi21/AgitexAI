# SSL / "Not Secure" Fix Checklist

The certificate is valid. If the browser still shows "Not secure", work through this:

---

## 1. Use HTTPS in the address bar

Open:

- **https://www.agitexai.com**
- or **https://agitexai.com**

(not `http://`). If it shows as secure over HTTPS, the rest is optional.

---

## 2. Redirect HTTP → HTTPS

Browsers should always end up on HTTPS. That redirect must be done by your **host**, not by Next.js.

### If you use **Vercel**

- Vercel serves HTTPS and redirects HTTP → HTTPS by default. No extra config needed.

### If you use **nginx** (e.g. VPS)

Add a server block that listens on port 80 and redirects to HTTPS:

```nginx
server {
    listen 80;
    server_name agitexai.com www.agitexai.com;
    return 301 https://$host$request_uri;
}
```

Your existing HTTPS server block (port 443) stays as is.

Reload nginx: `sudo nginx -t && sudo systemctl reload nginx`

### If you use **Apache**

Enable mod_ssl and a redirect, e.g. in the virtual host or in `.htaccess`:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 3. Mixed content (HTTP on an HTTPS page)

This app only uses **HTTPS** for:

- API calls (e.g. `https://api.web3forms.com/submit`)
- External links (e.g. `https://linkedin.com`, `https://github.com`)

So mixed content from this repo is unlikely. If you still see "not secure":

1. Open **Chrome DevTools** (F12) → **Console**.
2. Look for errors like:  
   `Mixed Content: The page at 'https://...' was loaded over HTTPS, but requested an insecure resource 'http://...'`
3. The message will name the insecure URL — fix that resource (or the script that loads it) to use `https://` or a relative URL.

---

## Summary

| Cause              | Fix                                              |
|--------------------|---------------------------------------------------|
| Opening `http://`  | Use **https://** in the address bar               |
| No HTTP→HTTPS      | Add redirect in nginx/Apache (or rely on Vercel) |
| Mixed content      | Change any `http://` resource to `https://`       |
