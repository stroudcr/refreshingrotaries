# Instagram Setup Instructions for Rachel

These are simple step-by-step instructions for Rachel to connect her Instagram to the website.

## What You'll Need
- Your Instagram account (rachelbee333)
- A Facebook account
- About 15 minutes

## Steps

### 1. Convert Your Instagram to a Professional Account
1. Open Instagram app on your phone
2. Go to your profile
3. Tap the menu (3 lines) → Settings → Account
4. Tap "Switch to Professional Account"
5. Choose "Creator" or "Business" (either works)
6. Follow the prompts to connect to a Facebook Page
   - If you don't have a Facebook Page, it will help you create one

### 2. Go to Facebook Business Suite
1. On your computer, go to: https://business.facebook.com
2. Login with your Facebook account
3. You should see your connected Instagram account

### 3. Create a Facebook App
1. Go to: https://developers.facebook.com
2. Click "My Apps" → "Create App"
3. Choose "Business" type
4. For App Name, enter: "RapidFire Rachel Website"
5. Enter your email
6. Click "Create App"

### 4. Get Your Access Token
1. Go to: https://developers.facebook.com/tools/explorer/
2. In the top dropdown, select your app "RapidFire Rachel Website"
3. Under "Permissions", add these:
   - `instagram_basic`
   - `pages_show_list`
   - `pages_read_engagement`
4. Click "Generate Access Token"
5. Login and approve all permissions
6. **COPY THE ACCESS TOKEN** - Save it somewhere safe!

### 5. Get Your Instagram Account ID
1. Still in Graph API Explorer
2. In the query box, type: `me/accounts`
3. Click "Submit"
4. Find your Facebook Page in the results
5. Copy the "id" number
6. Now in the query box, type: `YOUR_PAGE_ID?fields=instagram_business_account`
   - Replace YOUR_PAGE_ID with the number you copied
7. Click "Submit"
8. **COPY THE INSTAGRAM ACCOUNT ID** - It will look like: 17841400000000000

### 6. Make Token Long-Lived (Optional but Recommended)
1. Go to: https://developers.facebook.com/tools/debug/accesstoken/
2. Paste your access token
3. Click "Extend Access Token"
4. **COPY THE NEW LONGER TOKEN**

### 7. Send These to Your Developer
Send these two items (keep them private!):
- **Access Token**: (the long string)
- **Instagram Account ID**: (the number from step 5)

## That's It!
Your developer will add these to the website, and your Instagram posts will automatically appear.

## Important Notes
- Keep your access token private (like a password)
- The token expires every 60 days (we'll help you refresh it)
- You can revoke access anytime from Facebook Settings

## Need Help?
- If you get stuck, screenshots of each step help a lot
- The process takes about 15 minutes the first time
- Once it's set up, it works automatically