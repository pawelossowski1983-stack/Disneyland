# 🏰 DLP Navigator — Instrukcja uruchomienia

## Jak uruchomić na telefonie?

### Opcja A: Bezpośrednio z pliku (najprościej)
1. Skopiuj plik `index.html` na telefon (np. przez Google Drive, AirDrop, email)
2. Otwórz w Chrome (Android) lub Safari (iPhone)
3. Dodaj do ekranu głównego: Chrome → ⋮ → "Dodaj do ekranu głównego" / Safari → Udostępnij → "Na ekran startowy"

### Opcja B: Lokalny serwer (dla zaawansowanych)
```bash
# Zainstaluj live-server globalnie
npm install -g live-server

# Wejdź do folderu
cd dlp-navigator

# Uruchom
live-server --port=3000

# Otwórz na telefonie: http://[IP_KOMPUTERA]:3000
```

### Opcja C: GitHub Pages (hosting)
1. Wrzuć pliki na GitHub
2. Włącz GitHub Pages w ustawieniach repozytorium
3. Masz publiczny URL działający z każdego telefonu

---

## Jak dodać klucz API Claude?

1. Wejdź na https://console.anthropic.com
2. API Keys → Create Key
3. W aplikacji: kliknij ikonę ⚙️ (ustawienia, prawy górny róg)
4. Wklej klucz (zaczyna się od `sk-ant-api03-...`)
5. Zapisz — gotowe!

⚠️ Klucz jest zapisywany tylko lokalnie na Twoim telefonie (localStorage).
⚠️ Korzystanie z API Anthropic jest płatne (bardzo tanie przy takim użyciu — kilka groszy/dzień).

---

## Funkcje

| Zakładka | Co robi |
|----------|---------|
| ⏰ Kolejki | Live czasy z queue-times.com API + alert gdy krótko |
| 📅 Plan dnia | Kompletna oś czasu 8:30–22:00 z podświetleniem "teraz" |
| 🤖 AI Doradca | Chat z Claude (wymaga klucza API) + tryb offline |
| ⭐ Parady | Harmonogram shows z powiadomieniami |

---

## Dane techniczne

- **Framework**: Vanilla HTML/CSS/JS (zero dependencji)
- **AI**: Claude Sonnet via Anthropic API
- **Kolejki**: queue-times.com/parks/4/queue_times.json (darmowe)
- **Offline**: Service Worker cache
- **Powiadomienia**: Web Notifications API

---

## Profil rodziny (zakodowany w aplikacji)

- Dominika: 4 lata, 100 cm — dostępne atrakcje bez ograniczeń wzrostu
- Kuba: 8 lat, 140 cm — dostępne wszystkie atrakcje
- Park: Disneyland Park (klasyczny)
- Data: 20 kwietnia 2026

---

Powodzenia i magicznego dnia! 🏰✨
