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

### 4. Set Up Instagram Basic Display
1. In your app dashboard, click "Add Product" in the left sidebar
2. Find "Instagram Basic Display" and click "Set Up"
3. Click "Basic Display" under Instagram Basic Display in the left menu
4. Click "Create New App" button
5. Enter Display Name: "RapidFire Rachel Website Display"
6. Add these Valid OAuth Redirect URIs:
   - `https://localhost/`
   - `https://refreshingrotaries.com/`
7. Add Deauthorize Callback URL: `https://refreshingrotaries.com/`
8. Add Data Deletion Request URL: `https://refreshingrotaries.com/`
9. Click "Save Changes"
10. Scroll down and click "Add or Remove Instagram Testers"
11. Add your Instagram username (rachelbee333)
12. Go to Instagram app → Settings → Apps and Websites → Tester Invites → Accept the invite

### 5. Generate User Token (Alternative Method)
1. Still in Instagram Basic Display settings
2. Scroll to "User Token Generator" section
3. Click "Generate Token" next to your Instagram account
4. If button doesn't work, use this manual method:

   **Manual Token Generation:**
   1. Copy your App ID and App Secret from Basic Display settings
   2. Open a new browser tab and go to this URL (replace the values):
   ```
   https://api.instagram.com/oauth/authorize
   ?client_id=YOUR_APP_ID
   &redirect_uri=https://localhost/
   &scope=user_profile,user_media
   &response_type=code
   ```
   3. Authorize the app
   4. You'll be redirected to localhost with a code in the URL
   5. Copy the code from the URL (after `code=`)

5. **COPY THE ACCESS TOKEN** or authorization code - Save it!

### 6. Exchange Code for Access Token (if using manual method)
If you used the manual method and have an authorization code:
1. Use this curl command (replace values):
```bash
curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id=YOUR_APP_ID \
  -F client_secret=YOUR_APP_SECRET \
  -F grant_type=authorization_code \
  -F redirect_uri=https://localhost/ \
  -F code=YOUR_CODE
```
2. This will return your access token and user ID

### 7. Get Your Instagram Account ID (Simple Method)
1. If you have your access token, go to:
   ```
   https://graph.instagram.com/me?fields=id,username&access_token=YOUR_ACCESS_TOKEN
   ```
2. This will show your Instagram User ID
3. **COPY THE ID** - It will look like: 17841400000000000

### 8. Make Token Long-Lived (Recommended)
For Instagram Basic Display tokens:
```
https://graph.instagram.com/access_token?
grant_type=ig_exchange_token&
client_secret=YOUR_APP_SECRET&
access_token=YOUR_SHORT_LIVED_TOKEN
```
This will return a long-lived token (60 days instead of 1 hour)

### 9. Send These to Your Developer
Send these two items (keep them private!):
- **Access Token**: (the long string)
- **Instagram Account ID**: (the number from step 6)

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