# jscom-ice

A Jekyll theme for (johnsosoka.com)[https://johnsosoka.com]

**NOTE:** This repository and theme are open source, but not really meant for public consumption. If you would like to use this
theme, please fork the repository and make any changes you would like.

## Usage

1. Add to gemfile:
    ```
   group :jekyll_plugins do
    # jscom theme
    gem "jscom_ice", '~> 1.0.1'

    end
   ```
2. Add to _config.yml:
    ```
    theme: jscom_ice
    ```

## Features

### Newsletter Signup

The theme includes newsletter signup functionality that integrates with an API endpoint.

#### Footer Newsletter Signup

Add newsletter signup to your site footer with a compact, horizontal form. Configure in `_config.yml`:

```yaml
# Newsletter Settings
newsletter:
  api:
    url: https://api.johnsosoka.com/v1/newsletter
  footer:
    enabled: true
    title: "Newsletter Signup"
    description: "Get random updates"
```

**Configuration Options:**
- `newsletter.api.url` - Base URL for the newsletter API (required)
- `newsletter.footer.enabled` - Toggle footer signup form (default: false)
- `newsletter.footer.title` - Heading text for the footer signup
- `newsletter.footer.description` - Descriptive text below the heading

The footer signup form will appear between footer links and copyright text when enabled.

#### Dedicated Newsletter Page

Create a full-featured newsletter management page with subscribe, unsubscribe, and status check forms:

```markdown
---
layout: page
title: Newsletter
permalink: /newsletter/
---

<div class="newsletter-page-container">
  {% include newsletter-subscribe-form.html %}
  {% include newsletter-unsubscribe-form.html %}
  {% include newsletter-status-check.html %}
</div>
```

**Available Includes:**
- `newsletter-subscribe-form.html` - Full subscription form with email and optional name fields
- `newsletter-unsubscribe-form.html` - Unsubscribe by email
- `newsletter-status-check.html` - Check subscription status with formatted results

#### API Integration

The newsletter components expect the following API endpoints:

- `POST /v1/newsletter` - Subscribe (body: `{"email": "user@example.com", "name": "Optional Name"}`)
- `DELETE /v1/newsletter` - Unsubscribe (body: `{"email": "user@example.com"}`)
- `GET /v1/newsletter/status?email=user@example.com` - Check status

Responses are displayed with Bootstrap-styled alerts for success/error messaging.
   
## Release

Releasing requires a rubygems account with access to the jscom-ice gem.

1. Make changes to the theme
2. Adjust version in the gemspec
3. build the gem `gem build jscom_ice_theme.gemspec`
4. Push the gem to rubygems `gem push jscom_ice-0.0.1.gem` (be sure to update the version number)

