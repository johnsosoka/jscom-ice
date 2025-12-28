Gem::Specification.new do |spec|
  spec.name          = "jscom_ice"
  spec.version       = "1.3.0"
  spec.authors       = ["John Sosoka"]
  spec.email         = ["code@johnsosoka.com"]

  spec.summary       = "Simple Dark Jekyll Theme"
  spec.description   = "Simple Jekyll theme created for https://johnsosoka.com"
  spec.homepage      = "https://github.com/johnsosoka/jscom-ice"
  spec.license       = "GPL-3.0"

  # Files
  spec.files = Dir["{assets,_includes,_layouts,_sass}/**/*"] + ["LICENSE", "README.md"]

  # Dependencies
  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.17"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-compose", "~> 0.12"
end
