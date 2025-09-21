# Instagram API Integration Setup

This guide explains how to connect the social feed to display real Instagram posts using the Instagram Graph API.

## Prerequisites

1. **Instagram Business or Creator Account** (rachelbee333 must be converted to Business/Creator)
2. **Facebook Page** (to connect the Instagram account)
3. **Facebook Developer Account**

## Setup Steps

### 1. Convert Instagram to Business/Creator Account

1. Open Instagram app → Profile → Settings → Account
2. Switch to Professional Account → Choose Creator or Business
3. Connect to a Facebook Page (create one if needed)

### 2. Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Select **"Business"** as the app type
4. Fill in app details

### 3. Add Instagram API Product

1. In your app dashboard, find "Instagram" or "Instagram API"
2. Click "Set Up"
3. Add your Facebook Page

### 4. Get Access Token

1. Go to Facebook Developer Tools → [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your App from the dropdown
3. Request these permissions:
   - `instagram_basic`
   - `pages_show_list`
   - `pages_read_engagement`
4. Click "Generate Access Token"
5. Authorize the permissions

### 5. Get Instagram Account ID

Using Graph API Explorer:
1. Make a GET request to: `me/accounts`
2. Find your Facebook Page ID
3. Make a GET request to: `{page-id}?fields=instagram_business_account`
4. Copy the Instagram Account ID

### 6. Convert to Long-Lived Token

1. Exchange short-lived token for long-lived token:
```
https://graph.facebook.com/v18.0/oauth/access_token?
grant_type=fb_exchange_token&
client_id={app-id}&
client_secret={app-secret}&
fb_exchange_token={short-lived-token}
```

2. Then get a Page access token that never expires

### 7. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Add your credentials:

```env
INSTAGRAM_ACCESS_TOKEN=your_long_lived_page_access_token
INSTAGRAM_ACCOUNT_ID=your_instagram_account_id
```

## Alternative Setup Methods

### Option 1: Use Facebook Business Suite
- Easier for non-technical users
- Rachel can generate tokens directly from Business Suite
- Share only the tokens, not login credentials

### Option 2: Instagram Embed
If API setup is too complex, consider using Instagram's embed feature:
- No API needed
- Just embed Instagram posts directly
- Less dynamic but simpler

## Testing

1. Start your development server: `npm run dev`
2. Check browser console for any API errors
3. Posts should appear in the social feed section

## Troubleshooting

- **"Invalid OAuth access token"**: Token expired or incorrect
- **"Instagram Account ID not found"**: Ensure Instagram is connected to Facebook Page
- **"Permissions error"**: Need to request proper permissions
- **No posts showing**: Check if the account has public posts

## Important Notes

- Instagram must be a Business or Creator account (not personal)
- The account must be connected to a Facebook Page
- Tokens need periodic refresh (every 60 days for long-lived tokens)
- Rate limits apply (200 calls per hour per user)