<!--
You must create a google project in order to use the google login with next-auth.
Steps:
1. Go to https://console.cloud.google.com/
2. Create a new project from the top left corner.
3. Go to the "APIs & Services" section. and Click on the "OAuth consent screen" tab.
4. Click "Create" and fill the required fields.
5 once thats saved, go to the "Credentials" tab and click on "Create Credentials" and select "OAuth client ID". (from the top bar)
6. Select "Web application" and fill the required fields.
  - in the "Authorized JavaScript origins" field, you can put "http://localhost:3000" or your production URL.
  - in this case, the "Authorized redirect URIs" since we are using google login with next-auth, you can put "http://localhost:3000/api/auth/callback/google" or your production URL.

 -->
