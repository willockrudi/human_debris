# 🤘 HumanDebris Website

**Indianapolis Old School Metal**  
Billy Lee · Jef Jones · Jared Asher · Ritchie Wilkison · Peter Wickes

---

## Quick Setup

1. **Buy domain:** `humandebris.com` at [porkbun.com](https://porkbun.com) (~$9/yr)
2. **Create GitHub repo:** Name it `humandebris.com`, set to Public
3. **Upload all these files** to the repo
4. **Enable GitHub Pages:** Settings → Pages → Deploy from `main` branch
5. **Set DNS** at your domain registrar:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     YOUR-GITHUB-USERNAME.github.io
```

6. **Enable HTTPS:** GitHub repo → Settings → Pages → check "Enforce HTTPS"

---

## Things You Still Need To Do

### Must-do before launch:
- [ ] Replace `band-hero.webp` with a clean band photo (not the Facebook screenshot)
- [ ] Add your `hero.mp4` file to `/assets/video/`
- [ ] Add products to your Shopify store and update BUY NOW links in `merch.html`
- [ ] Update the track title in `music.html` once you know the song name

### After launch:
- [ ] Add live show photos to `/assets/photos/` and update `gallery.html`
- [ ] Add individual member photos to `band.html`
- [ ] Add Spotify/Apple Music links to `music.html` once DistroKid distributes
- [ ] Update `shows.js` whenever you book new shows
- [ ] Take merch product photos and replace logo placeholders in `merch.html`

---

## How To Update Shows

Open `js/shows.js` and add a new object:

```javascript
{
  date: "2026-06-15",
  time: "9:00 PM",
  venue: "Venue Name Here",
  location: "City, ST",
  ticketUrl: "https://ticket-link.com",
  past: false
}
```

Set `past: true` after the show date passes.

---

## Links

- **Formspree:** https://formspree.io/f/xojplpob
- **Shopify:** https://admin.shopify.com/store/human-debris-merch
- **Facebook:** https://facebook.com/profile.php?id=61583589017371
- **YouTube:** https://www.youtube.com/playlist?list=OLAK5uy_nDLS0WcJCeptWyizuUw6TR9iF5Icl0qGE
- **Email:** Humandebrisband@gmail.com
