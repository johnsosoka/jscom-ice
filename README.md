# jscom-ice

A Jekyll theme for (johnsosoka.com)[https://johnsosoka.com]

**NOTE:** This repository and theme are open source, but not really meant for public consumption. If you would like to use this 
theme, please fork the repository and make any changes you would like.

## Usage

1. Add to gemfile: 
    ```
   group :jekyll_plugins do
    # jscom theme
    gem "jscom_ice", '~> 0.0.3'
    
    end
   ```
2. Add to _config.yml:
    ```
    theme: jscom_ice
    ```
   
## Release

Releasing requires a rubygems account with access to the jscom-ice gem.

1. Make changes to the theme
2. Adjust version in the gemspec
3. build the gem `gem build jscom_ice_theme.gemspec`
4. Push the gem to rubygems `gem push jscom_ice-0.0.1.gem` (be sure to update the version number)

